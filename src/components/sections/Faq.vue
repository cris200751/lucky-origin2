<template>
  <section id="faq">
    <div class="section-container">
      <h1 class="title">FAQ</h1>
      <div class="content">
        <div
          v-for="(cat, catIndex) in listCat"
          :key="catIndex"
          class="faq-category"
        >
          <p class="faq-category-title">{{ cat.catName }}</p>
          <ul class="list-faq">
            <li
              v-for="(faq, faqIndex) in cat.listFaq"
              :key="faqIndex"
              class="faq-item"
            >
              <p class="faq-question" @click="faq.active = !faq.active">
                {{ faq.question }}
              </p>
              <p class="faq-answer" v-if="faq.active">{{ faq.answer }}</p>
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
              question:
                "1. How do I start mining? Do I need to stake my NFT on the LM platform? Or deposit into my wallet which is linked to LM?",
              answer:
                "In LM, you can get rewards for holding NFT without staking LM to any platform. Your NFT will be stored in your wallet. After receiving your NFT rewards, you'll  need to connect the contract, sign and pay the gas fee.",
            },
            {
              active: false,
              question:
                "2. What is the price of the NFT? Will the price be marked on the website? Or can I only check the price on OpenSea? Is there any link?",
              answer:
                "Different NFT will have different prices. LM's NFT are all priced in ETH. You can check the price on OpenSea, and also in the market of LM DAPP.",
            },
            {
              active: false,
              question:
                "3. What is the hash rate of each NFT? Where can I check it?",
              answer:
                "Different NFT compute different hash rate. The higher level of the NFT, the higher hash rate will be computed. You can check the details of the specific NFT in the Bag of the LM Dapp. The information includes level, rarity, and hash rate.",
            },
          ],
        },
        {
          catName: "Token",
          listFaq: [
            {
              active: false,
              question: "1. Which platform will the LMT be released?",
              answer:
                "The LMT has not been released on platfrom yet. While LM officially online, we'll add the LMT into Uniswap and Quicksap. In order to create liquidity and price determination.",
            },
            {
              active: false,
              question: "2. Where can I buy or trade the LMT?",
              answer:
                "You can use the convert function, which is in the LM DAPP, to trade USDT or ETH in LMT. LMT can also be purchased on other DEX or CEX.",
            },
            {
              active: false,
              question:
                "3. What is the current price? What will the price be while it's on the exchange?",
              answer:
                "The current price is 1 LMT = 1 USDT. The price on the exchange is not final yet.",
            },
          ],
        },
        {
          catName: "Metaverse",
          listFaq: [
            {
              active: false,
              question: "1. When will it be a metaverse?",
              answer:
                "The current mobile version is already a metaverse. The PC version is currently being tested and will be released within a month.",
            },
            {
              active: false,
              question:
                "2. What will the LM metaverse looks like? Is there any reference?",
              answer:
                "Please ask our official admins to get the test address of LM. Currently, we are actively building the LM community and DAO, and everyone is welcome to participate.",
            },
            {
              active: false,
              question:
                "3. What are the characters look like? Are there any design drawings for reference?",
              answer:
                "LM has 10 rare NFT charaters and 20 ordinary NFT characters. Please ask our official admins for detailed designs.",
            },
          ],
        },
        {
          catName: "Game",
          listFaq: [
            {
              active: false,
              question:
                "1. Besides slot machines, what other gaming games are there?",
              answer:
                "We will launch Baccarat and Sic Bo within a month. And will launch Sportsbook and Poker games within two months.",
            },
            {
              active: false,
              question:
                "2. Is the game already a metaverse? Or is it just an online casino for now?",
              answer:
                "LM already has various functions of the usual metaverse, and is a decentralized, entertainment-oriented free online casino.",
            },
            {
              active: false,
              question: "3. Which games are P2E version?",
              answer:
                "All of the games on LM are P2E version and can get P2E rewards.",
            },
            {
              active: false,
              question: "4. Will LuckyMeta be built in the Sandbox metaverse?",
              answer: "Currently we don't have plans to do this.",
            },
          ],
        },
        {
          catName: "Pledge",
          listFaq: [
            {
              active: false,
              question: "1. What is the minimum bet to have dividends?",
              answer:
                "The minimum bet for the game in LM is 50 LMG. Dividends are based on your effective stake as a percentage of your total stake. For specific rules, please refer to the LM white paper.",
            },
            {
              active: false,
              question: "2. How much dividends can I have as a VIP member?",
              answer:
                "The higher level of the VIP member, the more divedends you can have. Please check the LM white paper for details.",
            },
            {
              active: false,
              question:
                "3. Where can I find the details of dividends and rewards? On the website or the gaming platform?",
              answer:
                "You can find the specific reward rules on the WIKI of LM official website : WWW.LUKYMETA.IO .  And of course you can also find its calculation formula in the white paper.",
            },
          ],
        },
        {
          catName: "Development and Partners",
          listFaq: [
            {
              active: false,
              question:
                "1. Is LuckyMeta game be developed by any well-known developer?",
              answer:
                "LM is developed by the engineers who managed casino game which is placed in the top 10 of the APP Store. Both of the main engineer and the main planner have nearly 15 years of experience in the gaming industry. And of course they are also Cypherpunk.",
            },
            {
              active: false,
              question: "2. What partners does LuckyMeta have?",
              answer: "Please check LM's website to know our partners.",
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
  padding: 47.5px 0 29.5px;
  color: #ffffff;
  text-align: center;
  font-size: 19.57px;
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