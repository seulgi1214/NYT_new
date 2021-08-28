<template>
  <Nav />
<router-view/>
</template>

<script>
import Nav from '@/views/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>


<style>
#app {
  max-width: 1000px;
  margin: 0 auto;
}


* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  color: #111111;
}

html, body, ul, ol, h1, h2 ,h3 ,h4 ,h5, p {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #111111;
  display: block;
}

nav {
  padding: 20px;
}

section {
  padding: 20px;
}

article {
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  padding: 10px 0;
}

article:not(:last-child) {
  border-bottom: none;
}

img {
  display: block;
}

.article_img img {
  width: 350px;

}

.home {
  max-width: 1000px;
  margin: 0 auto;
}

.comm_title {
  font-size: 1.5rem;
}

.comm_sub_title {
  font-size: 1.5rem;
  word-spacing: -1px;
  line-height: 2rem;
  margin-bottom: 1rem;
  width: 80%;
}

.comm_abstract {
  color: #646464;
  font-weight: 300;
  font-size: 15px;
}

</style>
