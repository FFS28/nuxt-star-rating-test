<template>
  <div class="m-8">
    <h1 class="text-3xl font-bold underline">Customer Reviews Component</h1>
    <div class="mt-8">
      <label>rate: </label>
      <input
        :model="rate"
        :value="rate"
        @keyup="setRate($event)"
        style="
          width: 100% !important;
          height: 30px !important;
          border: 1px solid black;
        "
      />
    </div>
    <div class="mt-8">
      <label>total value: </label>
      <input :model="totalvalue" />
      <input
        :model="totalvalue"
        :value="totalvalue"
        @keyup="setTotal($event)"
        style="
          width: 100% !important;
          height: 30px !important;
          border: 1px solid black;
        "
      />
    </div>
    <div class="mt-8">
      <CeCustomerReviews
        :rate="rate"
        :realRate="real_rate"
        :value="totalvalue"
      ></CeCustomerReviews>
    </div>
    <div class="mt-24">
      Expected result:
      <img src="/result.png" alt="Expected result" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      rate: 0,
      totalvalue: 0,
      real_rate: 0,
    };
  },
  methods: {
    setRate: function (event) {
      this.rate = event.target.value;
      if (this.rate > 5) {
        alert('rate must less than 5');
        this.rate = 5;
      }
      if (this.rate < 0) {
        alert('rate must between 0 and 5');
        this.rate = 0;
      }
      this.real_rate = Math.ceil(this.rate * 2);
    },
    setTotal: function (event) {
      this.totalvalue = event.target.value;
    },
  },
};
</script>
