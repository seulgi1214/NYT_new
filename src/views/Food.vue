<template>
  <section class="food_sec">
    <h2 class="comm_title">FOOD</h2>
    <article class="food_article" :key="i" v-for="(item, i) in news">
      <div class="food_wrap">
        <div class="food_img">
          <img :src="news[i].multimedia ? news[i].multimedia[0].url : ''"  />
          <span class="byline">{{news[i].byline}}</span>
        </div>
        <div class="food_content">
          <span class="title">{{news[i].title}}</span>
          <p class="abstract">{{news[i].abstract}}</p>
          <span class="tags">#{{news[i].des_facet ? news[i].des_facet[0] : ''}}</span>
          <span class="tags">#{{news[i].des_facet ? news[i].des_facet[1] : ''}}</span>
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
      base: 'https://api.nytimes.com/svc/topstories/v2/food.json',
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

.food_wrap {
  width: 500px;
  text-align: center;
  margin: 0 auto;
}

.food_wrap .food_img img {
  width: 500px;
}

.food_wrap .food_img .byline {
  text-align: right;
  display: block;
  color: gray;
  font-weight: 300;
  font-size: 0.7rem;
}

.food_wrap .food_content {
  margin-top: 1rem;
}


.food_content .title {
  display: block;
  margin: .5rem 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.food_content .abstract {
  margin: 0 0 .5rem 0;
}

.food_content .tags {
  font-size: 0.7rem;
  background-color: lightblue;
  border-radius: 15px;
  padding: 5px 8px;
}

.food_content .tags:not(:last-child) {
  margin-right: 5px;
}

@media screen and (max-width: 700px) { 
  .food_wrap {
    width: 100%;
  }
  .food_wrap .food_img img {
    width: 100%;
  }
}

</style>