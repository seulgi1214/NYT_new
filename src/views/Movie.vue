<template>
  <section class="movie_sec">
    <h2 class="comm_title">MOVIE REVIEW</h2>
    <article class="movie_article" :key="i" v-for="(item, i) in news">
      <h5 class="title">{{news[i].headline}}</h5>
      <div class="movie_wrap">
        <div class="img">
          <img :src="news[i].multimedia ? news[i].multimedia.src : ''"  />
        </div>
        <div class="content">
          <span class="title">{{news[i].display_title}}</span>
          <span class="opendate" v-if=news[i].opening_date>opening date : {{news[i].opening_date}}</span>
          <p class="summary">{{news[i].summary_short}}</p>
          <span class="reviewer">-{{news[i].byline}}</span>
        </div>
      </div>
    </article>
    
  </section>
</template>


<script>

export default {
  name: '',
  component: {},
  data(){
    return {
      base: 'https://api.nytimes.com/svc/movies/v2/reviews/all.json',
      api_key: process.env.VUE_APP_api_key,
      news: [{

      }],
      tags:[]
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
      this.news = res.results;
      //console.log(res);
    }

  }
  
}
</script>



<style scoped>

.movie_article {
  border: 1px solid gainsboro;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.movie_article:last-child {
  margin-bottom: 0;
}

.title {
  font-size: 1.4rem;
}

.movie_wrap {
  display: flex;
  margin: 10px 0;
}

.movie_wrap .img {
  position: relative;
  margin-right: 20px;
}

.movie_wrap .img::after {
  position: absolute;
  width: 1px;
  height: 100%;
  content: "";
  top: 0;
  right: -10px;
  background-color: gainsboro;
}

.movie_wrap .content .title {
  margin-right: 1rem;
}

.movie_wrap .content .opendate {
  font-size: 0.9rem;
}

.movie_wrap .content .summary {
  margin: 0.8rem 0;
  color:#646464;
}

</style>