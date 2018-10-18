<template>
  <div class="user">
    <h2>Hello , {{ $route.params.id }}</h2>
    <a href="/#/user/guest/profile">User profile</a><br/>
    <a href="/#/user/guest/posts">User Posts</a><br/>
    <a href="" onclick="$route.goBack()">go Back</a>
　　　　　　<router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

