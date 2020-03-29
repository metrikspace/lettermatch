<template>
  <div class="cage">
    <h1 class="title">Letter Match Game</h1>
    <h1 class="uppercase">{{uppercase[0]}}</h1>
    <div class="matches">
      <div class="matchesRow">
        <button @click="check($refs.answerone)" class="lowercase">
          <h1 ref="answerone">a</h1>
        </button>
        <button @click="check($refs.answertwo)" class="lowercase">
          <h1 ref="answertwo">b</h1>
        </button>
        <button @click="check($refs.answerthree)" class="lowercase">
          <h1 ref="answerthree">c</h1>
        </button>
      </div>
      <div class="matchesRow">
        <button @click="check($refs.answerone)" class="lowercase">
          <h1 ref="answerone">e</h1>
        </button>
        <button @click="check($refs.answertwo)" class="lowercase">
          <h1 ref="answertwo">f</h1>
        </button>
        <button @click="check($refs.answerthree)" class="lowercase">
          <h1 ref="answerthree">g</h1>
        </button>
      </div>
      <div class="matchesRow">
        <button @click="check($refs.answerzero)" class="answerzero">
          <h1 ref="answerzero">None</h1>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    check: function(ref) {
      console.log(ref.innerText.toUpperCase());
    }
  }
};
</script>
<style lang="scss" scoped>
div.cage {
  border: 2.5rem groove var(--colorone);
  background-color: var(--colortwo);
  display: grid;
  grid-template-rows: 25vh 25vh auto;
  height: 100vh;
  width: 100vw;
}
h1.title {
  align-items: center;
  border: 1.5rem groove var(--colorthree);
  display: flex;
  font-weight: 600;
  justify-content: center;
}
h1.uppercase {
  align-items: center;
  border: 1.5rem groove var(--colorthree);
  display: flex;
  font-weight: 600;
  justify-content: center;
  text-transform: uppercase;
}
div.matches {
  border: 1.5rem groove var(--colorthree);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1rem;
}
div.matchesRow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  padding: 1rem;
}
button.lowercase {
  align-items: center;
  box-shadow: 0.5rem 0.7rem 0.3rem rgba(0, 0, 0, 0.2);
  border: 0.5rem solid var(--colorfour);
  display: flex;
  font-weight: 400;
  justify-content: center;
  text-transform: lowercase;
  outline: none;
  &:hover {
    box-shadow: 0.5rem 1.2rem 0.5rem rgba(0, 0, 0, 0.4);
    transform: translateY(-0.5rem);
    transition: all 0.5s;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &:active {
    box-shadow: 0.5rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    transition: all 0.5s;
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
  &:hover {
    box-shadow: 0.5rem 1.2rem 0.5rem rgba(0, 0, 0, 0.4);
    transform: translateY(-0.5rem);
    transition: all 0.5s;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &:active {
    box-shadow: 0.5rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    transition: all 0.5s;
  }
  h1 {
    font-weight: 100;
  }
}
</style>