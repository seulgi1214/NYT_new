<template>
  <section class="topStory_sec">
    <h2 class="comm_title">TOP STORIES</h2>
    <article class="topStory_article" :key="i" v-for="(item, i) in news">
      <div class="ts_content">
        <p class="comm_sub_title">{{news[i].title}}</p>
        <p class="comm_abstract">{{news[i].abstract}}</p>
      </div>
      <div class="ts article_img">
        <img :src="news[i].multimedia ? news[i].multimedia[0].url : ''"  />
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
      base: 'https://api.nytimes.com/svc/topstories/v2/home.json',
      api_key: process.env.VUE_APP_api_key,
      news: [{

      }],
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
      this.news = res.results;
    }

  }
  
}
</script>



<style scoped>

.topStory_article {
  display: flex;
  justify-content: space-between;
}

.topStory_article:nth-child(odd) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.topStory_article .ts_content {
  margin-right: 10px;
}
.topStory_article:nth-child(odd) .ts_content {
  margin-left: 10px;
}


</style>