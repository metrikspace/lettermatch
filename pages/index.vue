<template>
  <div class="cage">
    <div class="top">
      <h1 class="title" ref="title">{{title}}</h1>
      <button @click="newGame" class="newgame" v-if="won">New Game</button>
    </div>
    <h1 class="uppercase">{{ gameset[0] }}</h1>
    <div class="matches">
      <div class="matchesRow">
        <button @click="check($refs.answerone)" class="lowercase">
          <h1 ref="answerone">{{ gameset[1] }}</h1>
        </button>
        <button @click="check($refs.answertwo)" class="lowercase">
          <h1 ref="answertwo">{{ gameset[2] }}</h1>
        </button>
        <button @click="check($refs.answerthree)" class="lowercase">
          <h1 ref="answerthree">{{ gameset[3] }}</h1>
        </button>
      </div>
      <div class="matchesRow">
        <button @click="check($refs.answerfour)" class="lowercase">
          <h1 ref="answerfour">{{ gameset[4] }}</h1>
        </button>
        <button @click="check($refs.answerfive)" class="lowercase">
          <h1 ref="answerfive">{{ gameset[5] }}</h1>
        </button>
        <button @click="check($refs.answersix)" class="lowercase">
          <h1 ref="answersix">{{ gameset[6] }}</h1>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gameset: [],
      lowercase: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ],
      title: 'Letter Match Game',
      uppercase: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      won: false
    };
  },
  methods: {
    check: function(ref) {
      if (this.$refs.title.innerHTML === 'Letter Match Game') {
        if (this.gameset[0] === ref.innerHTML.toUpperCase()) {
          ref.classList.add('winning');
          this.title = 'Correct!';
          this.won = true;
        } else {
          ref.classList.add('losing');
        }
      }
    },
    newGame: function() {
      window.location.reload();
    },
    setLowercase: function() {
      while (this.gameset.length <= 6) {
        let value = Math.floor(Math.random() * 25);
        if (this.gameset.indexOf(this.lowercase[value]) === -1)
          this.gameset.push(this.lowercase[value]);
      }
      if (this.gameset.indexOf(this.gameset[0].toLowerCase()) === -1) {
        let value = Math.floor(Math.random() * 6 + 1);
        this.gameset[value] = this.gameset[0].toLowerCase();
      }
    },
    setUppercase: function() {
      let value = Math.floor(Math.random() * 25);
      this.gameset.push(this.uppercase[value]);
    }
  },
  mounted() {
    this.setUppercase();
    this.setLowercase();
  }
};
</script>
<style lang="scss" global>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --colorone: #fc4445;
  --colortwo: #3feee6;
  --colorthree: #54bcc9;
  --colorfour: #97caef;
  --colorfive: #cafafe;
  --winningcolor: green;
  --losingcolor: red;
}
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 10px;
  word-spacing: 1px;
}
div.cage {
  border: 2.5rem groove var(--colorone);
  background-color: var(--colortwo);
  display: grid;
  grid-template-rows: 25vh 25vh calc(50vh - 5rem);
  height: 100vh;
  width: 100vw;
}
div.top {
  border: 1.5rem groove var(--colorthree);
  display: grid;
  grid-template-rows: auto min-content;
  h1.title {
    align-items: center;
    display: flex;
    font-weight: 600;
    justify-content: center;
    @media only screen and (orientation: portrait) {
      font-size: 10rem;
    }
    @media only screen and (orientation: landscape) {
      font-size: 3.4rem;
    }
  }
  button.newgame {
    font-weight: 600;
    @media only screen and (orientation: portrait) {
      font-size: 3rem;
      height: 8rem;
    }
    @media only screen and (orientation: landscape) {
      font-size: 2rem;
      height: 4rem;
    }
  }
}
h1.uppercase {
  align-items: center;
  border: 1.5rem groove var(--colorthree);
  display: flex;
  font-weight: 400;
  @media only screen and (orientation: portrait) {
    font-size: 20rem;
  }
  @media only screen and (orientation: landscape) {
    font-size: 10rem;
  }
  justify-content: center;
  text-transform: uppercase;
}
div.matches {
  border: 1.5rem groove var(--colorthree);
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
  padding: 0.5rem 1rem 1rem 0.5rem;
}
div.matchesRow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
}
button.lowercase {
  box-shadow: 0.5rem 0.7rem 0.3rem rgba(0, 0, 0, 0.2);
  border: 0.5rem solid var(--colorfour);
  text-transform: lowercase;
  outline: none;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  h1 {
    align-items: center;
    display: flex;
    @media only screen and (orientation: portrait) {
      font-size: 7.5rem;
    }
    @media only screen and (orientation: landscape) {
      font-size: 3.75rem;
    }
    font-weight: 600;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
}
button.answerzero {
  align-items: center;
  box-shadow: 0.5rem 0.7rem 0.3rem rgba(0, 0, 0, 0.2);
  border: 0.5rem solid var(--colorfour);
  display: flex;
  grid-column: 1/ -1;
  justify-content: center;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  h1 {
    font-weight: 500;
    @media only screen and (orientation: portrait) {
      font-size: 7.5rem;
    }
    @media only screen and (orientation: landscape) {
      font-size: 3.75rem;
    }
  }
}
.winning {
  background-color: var(--winningcolor);
  transition: background-color 1s;
}
.losing {
  background-color: var(--losingcolor);
  transition: background-color 1s;
}
</style>
