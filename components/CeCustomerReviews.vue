<template>
  <div class="flex">
    <img src="./../static/cert-gold.png" class="h-24 w-24" />
    <div class="block bg-gray-800 ml-6 py-2 px-6 tip">
      <p>Das sagen unsere Kunden</p>
      <div class="flex">
        <label v-for="i in 5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            class="block h-8 w-8 fill-yellow"
            v-if="realRate - (i - 1) * 2 == 1"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="block h-8 w-8"
            v-else-if="realRate >= i * 2"
            :class="[realRate >= i * 2 ? 'text-orange' : 'text-grey']"
            fill="currentColor"
            viewBox="0 0 576 512"
          >
            <path
              class="fill-blue"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="block h-8 w-8 text-grey"
            v-else
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
        </label>
      </div>
      <p>{{ rate }} / 5 (aus {{ value }} Bewertungen)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CeCustomerReviews',
  props: ['rate', 'value', 'realRate'],
  data: function () {
    return {
      real_rate: Math.ceil(this.rate * 2) / 2,
    };
  },
};
</script>
<style>
.tip {
  background-color: #f0fff0;
}
.tip::after {
  position: absolute;
  margin-left: -43px;
  margin-top: -60px;
  content: '';

  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;

  border-right: 20px solid #f0fff0;
}
</style>
