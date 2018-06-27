<template>
  <div class="container" :style="{background: color}">
      <div class="quote-box">
        <p class="quote">
          <i class="fa fa-quote-left" aria-hidden="true" :style="{color: color}"></i>{{ quote }}
        </p>
        <p class="author"> - {{ author }}</p>
        <a 
          :href="`https://twitter.com/intent/tweet?text=` +`'`+quote+`'` +` -` + author"
          class="twitter"
          >
          <i class="fa fa-twitter" aria-hidden="true" :style="{background: color}"></i>
        </a>
        <button 
          id="quoteBtn" @click="getQuote" :style="{background: color}">New quote</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quote: '',
      author: '',
      color: '',
      colors: ["#333", "rgb(22, 160, 133)", "rgb(52, 34, 36)", "rgb(155, 89, 182)", "rgb(189, 187, 153)", "rgb(71, 46, 50)", "rgb(251, 105, 100)", "rgb(243, 156, 18)", "#26C6DA", "#009688"]
    }
  },
  methods: {
    getQuote() {
      this.getColors()
      this.resource.get().then(response => response.json())
        .then(quote => {
          this.quote = quote[0].quote
          this.author = quote[0].author
        })
    },
    getColors() {
      this.color = this.colors[Math.floor(Math.random()*this.colors.length)]
    }
  },
  created() {
    this.resource = this.$resource()
  },
  beforeMount() {
    this.getQuote()
  }
}

</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
	  transition: 0.5s;
    background: #333;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .quote-box {
    width: 500px;
    position: relative;
    background: #fff;
    border-radius: 3px;
    transition: height .3s;
    .quote {
      text-align: center;
      padding: 25px 25px 0px 25px;
      font-size: 28px;
      line-height: 1.2;
      transition: .5s;
    }
    i {
      padding: 0px 10px;
    }
    .author {
      float: right;
      padding: 10px;
      margin-bottom: 60px;
      margin-right: 10px;
      transition: .5s;
    }
    .twitter {
      position: absolute;
      left: 20px;
      bottom: 20px;
      font-size: 16px;
      color: #fff;
      i {
        background: #333;
        height: 35px;
        line-height: 35px;
        border-radius: 3px;
        transition: .5s;
      }
    }
    #quoteBtn {
      position: absolute;
      right: 20px;
      bottom: 20px;
      border: none;
      outline: none;
      padding: 10px 25px;
      background: #333;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
      transition: .5s;
    }
  }
</style>
