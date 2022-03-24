<template>
  <section id="faq">
    <div class="section-container">
      <h1 class="title">{{ $t("FAQ") }}</h1>
      <div class="content">
        <div
          v-for="(cat, catIndex) in listCat"
          :key="catIndex"
          class="faq-category"
        >
          <p class="faq-category-title">{{ $t(cat.catName) }}</p>
          <ul class="list-faq">
            <li
              v-for="(faq, faqIndex) in cat.listFaq"
              :key="faqIndex"
              class="faq-item"
            >
              <p class="faq-question" @click="faq.active = !faq.active">
                {{ $t(faq.question) }}
              </p>
              <p class="faq-answer" v-if="faq.active">{{ $t(faq.answer) }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      listCat: [
        {
          catName: "Mining",
          listFaq: [
            {
              active: false,
              question: "Mining1",
              answer: "Mining1_answer",
            },
            {
              active: false,
              question: "Mining2",
              answer: "Mining2_answer",
            },
            {
              active: false,
              question: "Mining3",
              answer: "Mining3_answer",
            },
          ],
        },
        {
          catName: "Token",
          listFaq: [
            {
              active: false,
              question: "Token1",
              answer: "Token1_answer",
            },
            {
              active: false,
              question: "Token2",
              answer: "Token2_answer",
            },
            {
              active: false,
              question: "Token3",
              answer: "Token3_answer",
            },
          ],
        },
        {
          catName: "Metaverse",
          listFaq: [
            {
              active: false,
              question: "Metaverse1",
              answer: "Metaverse1_answer",
            },
            {
              active: false,
              question: "Metaverse2",
              answer: "Metaverse2_answer",
            },
            {
              active: false,
              question: "Metaverse3",
              answer: "Metaverse3_answer",
            },
          ],
        },
        {
          catName: "Game",
          listFaq: [
            {
              active: false,
              question: "Game1",
              answer: "Game1_answer",
            },
            {
              active: false,
              question: "Game2",
              answer: "Game2_answer",
            },
            {
              active: false,
              question: "Game3",
              answer: "Game3_answer",
            },
            {
              active: false,
              question: "Game4",
              answer: "Game4_answer",
            },
          ],
        },
        {
          catName: "Pledge",
          listFaq: [
            {
              active: false,
              question: "Pledge1",
              answer: "Pledge1_answer",
            },
            {
              active: false,
              question: "Pledge2",
              answer: "Pledge2_answer",
            },
            {
              active: false,
              question: "Pledge3",
              answer: "Pledge3_answer",
            },
          ],
        },
        {
          catName: "DevelopmentPartners",
          listFaq: [
            {
              active: false,
              question: "DevelopmentPartners1",
              answer: "DevelopmentPartners1_answer",
            },
            {
              active: false,
              question: "DevelopmentPartners2",
              answer: "DevelopmentPartners2_answer",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  padding: 30px 0 20px;
  color: #ffffff;
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  font-family: Magistral-Bold;
}

.content {
  padding: 0 60px;
}

.faq-category {
  margin-bottom: 40px;
}

.faq-category-title {
  font-family: Magistral-Bold;
  color: #c882ff;
  font-size: 18px;
  margin-bottom: 7px;
}

.faq-item .faq-question {
  font-family: Magistral-Book;
  font-size: 14px;
  margin-bottom: 7px;
}

.faq-item .faq-answer {
  font-family: Magistral-Book;
  font-size: 14px;
  margin-bottom: 7px;
  color: #c882ff;
}
</style>