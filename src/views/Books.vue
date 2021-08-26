<template>
  <section class="books_sec">
    <h2 class="comm_title">BEST SELLERS</h2>
    <article class="books_article" :key="i" v-for="(item, i) in news">
      <a :href= "news[i].books ? news[i].books[0].amazon_product_url : ''">
        <div class="books_wrap">
          <div class="books_img">
            <img :src="news[i].books ? news[i].books[0].book_image : ''"  />
          </div>
          <div class="books_content">
            <span class="subject">{{news[i].list_name}}</span>
            <span class="title">{{news[i].books ? news[i].books[0].title : ''}}</span>
            <span class="author">{{news[i].books ? news[i].books[0].author : ''}}</span>
            <span class="publisher">{{news[i].books ? news[i].books[0].publisher : ''}}</span>
            <p class="desc">{{news[i].books ? news[i].books[0].description : ''}}</p>
          </div> 
        </div>
        </a>
    </article>
  </section>
</template>


<script>

export default {
  name: '',
  component: {},
  data(){
    return {
      base: 'https://api.nytimes.com/svc/books/v3/lists/overview.json',
      api_key: process.env.VUE_APP_api_key,
      news: [{}],
    };
  },

  mounted() {
    this.fetchNews()
  },
  methods: {
    fetchNews() {
      fetch(`${this.base}?api-key=${this.api_key}`)
        .then(res => {
          return res.json();
        }).then( res => this.setResult(res));
    },
    setResult(res) {
      console.log(res);
      this.news = res.results.lists;
    }

  }
  
}
</script>



<style scoped>



.books_wrap {
  display: flex;
}

.books_wrap .books_img {
  margin-right: 15px;
}

.books_wrap .books_img img{
  width: 150px;
}

.books_wrap .books_content .subject {
  font-size: 0.8rem;
  display: block;
}

.books_wrap .books_content .title {
  font-size: 1.3rem;
  font-weight: 600;
  display: block;
}

.books_wrap .books_content .author {
  margin-right: 15px;
  position: relative;
}

.books_wrap .books_content .author::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 12px;
  background-color: #7a7a7a;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
}

.books_wrap .books_content .desc {
  display: block;
  color: #646464;
  font-size: 0.9rem;
  font-weight: 300;
  width: 70%;
  margin-top: .5rem;
}

</style>