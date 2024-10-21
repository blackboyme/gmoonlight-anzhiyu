var posts=["2024/03/26/hello-world/","2024/10/21/失去的痛苦像是给全世界打上了麻药/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };