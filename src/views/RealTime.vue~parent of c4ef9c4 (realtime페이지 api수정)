<template>
  <section>
    <h2 class="comm_title">Now</h2>
    <article class="realTime_article" :key="i" v-for="(item, i) in news">
      <div class="rt_headline">
        <p class="comm_sub_title">{{news[i].title}}</p>
        <span class="rt_section">{{news[i].section}}<span class="rt_subsection" v-if="news[i].subsection">{{news[i].subsection}}</span></span>
      </div>
      <div class="rt_content_wrap">
        <div class="rt_con_left">
          <p class="comm_abstract">{{news[i].abstract}}</p>
        </div> 
        <div class="rt_con_right">
          <img :src="news[i].multimedia ? news[i].multimedia[1].url : ''"  />
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
      base: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',
      api_key: 'AEAmf4J5QTZ2LaSKxkuBTthHI3YoNcLC',
      news: [{

      }]
    };
  },
  mounted() {
    this.fetchNews()
  },
  methods: {
    fetchNews() {
      //let pageNum = 0;
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


.rt_headline {
  display: flex;
  justify-content: space-between;
}

.rt_headline .rt_section, .rt_headline .rt_subsection {
  font-size: 13px;
  font-weight: 500;
  color: gray;
}

.rt_headline .rt_subsection {
  margin-left: 12px;
  position: relative;
}

.rt_headline .rt_subsection::before {
  position: absolute;
  content: "-";
  left: -10px;
  top: 50%;
  transform: translateY(-50%);

}

.rt_content_wrap {
  display: flex;
  justify-content: space-between;
}

.rt_content_wrap .rt_con_left {
  margin-right: 10px;
}

</style>