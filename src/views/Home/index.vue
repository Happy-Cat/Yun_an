<template>
  <div class="page-home">
    <div class="home-banner">
      <button @click="download('ios')" class="ios-btn"></button>
      <button @click="download('android')" class="android-btn"></button>
      <div class="banner-info">
        <i class="icon-qrcode"></i>
        <button @click="download('ios')" class="ios-btn"></button>
        <button @click="download('android')" class="android-btn"></button>
      </div>
    </div>
    <div class="home-item item1">
      <label class="info-title is-phone">
        <i></i>
        <span>记录怀孕周期，定时提醒孕期体检</span>
      </label>
      <div class="item-box">
        <i class="item-icon"></i>
        <div class="item-info">
          <label class="info-title is-pc">
            <i></i>
            <span>记录怀孕周期，定时提醒孕期体检</span>
          </label>
          <label class="info-desc">支持记录怀孕全流程，专业医生时刻提醒孕检并记录，时刻关注您的孕期健康。</label>
        </div>
      </div>
    </div>
    <div class="home-item item2">
      <label class="info-title is-phone">
        <i></i>
        <span>专业医生在线解答</span>
      </label>
      <div class="item-box">
        <i class="item-icon"></i>
        <div class="item-info">
          <label class="info-title is-pc">
            <i></i>
            <span>专业医生在线解答</span>
          </label>
          <label class="info-desc">三甲医院专业医生在线解答你的孕期问题，减少你的孕期焦虑。</label>
        </div>
      </div>
    </div>
    <div class="home-item item3">
      <label class="info-title is-phone">
        <i></i>
        <span>孕期知识在线看</span>
      </label>
      <div class="item-box">
        <i class="item-icon"></i>
        <div class="item-info">
          <label class="info-title is-pc">
            <i></i>
            <span>孕期知识在线看</span>
          </label>
          <label class="info-desc">专业的孕期知识分享，避免孕期采坑。</label>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <span class="clause">孕安 <router-link to="serviceterms">《服务条款》</router-link> <router-link to="privacy">《隐私保护》</router-link> </span>
      <span>Copyright © 2021 -2023 All Right Reserved 码上有喜版权所有</span>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      
    };
  },
  components: {
   
  },
  mounted() {
  },
  methods: {
    download(type) {
      if (type === 'ios') {
        window.open('ios')
      } else {
        window.open('android')
      }
    },
  }
};
</script>
<style lang='less'>
.page-home {
  background: #F0F2F4;
  min-width: 1200px;
  .home-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 512px;
    background: url("./images/pc-banner.png") no-repeat center center;
    background-size: 1921px 512px;
    .ios-btn {
      display: none;
    }
    .android-btn {
      display: none;
    }
    .banner-info {
      position: relative;
      width: 1200px;
      height: 100%;
      .icon-qrcode {
        position: absolute;
        top: 310px;
        left: 10px;
        background: url('./images/qrcode.png') no-repeat;
        background-size: contain;
        width: 100px;
        height: 100px;
      }
      .ios-btn {
        cursor: pointer;
        width: 130px;
        height: 40px;
        position: absolute;
        top: 310px;
        left: 140px;
        display: block;
        opacity: 0;
        outline: none;
      }
      .android-btn {
        cursor: pointer;
        width: 130px;
        height: 40px;
        position: absolute;
        top: 365px;
        left: 140px;
        display: block;
        opacity: 0;
        outline: none;
      }
    }
  }
  .home-item {
    width: 100%;
    padding: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .info-title {
      display: flex;
      align-items: center;
      font-size: 34px;
      font-weight: 500;
      color: #333333;
      line-height: 48px;
      margin-bottom: 17px;
      >i {
        width: 57px;
        height: 65px;
        margin-right: 15px;
      }
      &.is-phone {
        display: none;
      }
    }
    .item-box {
      display: flex;
      align-items: center;
      width: 1200px;
      .item-icon {
        width: 287px;
        height: 449px;
        margin-right: 75px;
        flex-shrink: 0;
      }
      .item-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        .info-desc {
          font-size: 20px;
          font-weight: 400;
          color: #666666;
          line-height: 28px;
        }
      }
    }
    
    &:nth-child(2n - 1) {
      background: linear-gradient(90deg, #F0F2F4 0%, #FFFFFF 100%);
      .item-box {
        flex-direction: row-reverse;
      }
    }

    &.item1 {
      .info-title {
        >i {
          background: url("./images/01.png") no-repeat;
          background-size: contain;
        }
      }
      .item-box {
        .item-icon {
          background: url("./images/line1.png") no-repeat;
          background-size: contain;
        }
      }
    }
    &.item2 {
      .info-title {
        >i {
          background: url("./images/02.png") no-repeat;
          background-size: contain;
        }
      }
      .item-box {
        .item-icon {
          background: url("./images/line2.png") no-repeat;
          background-size: contain;
        }
      }
    }
    &.item3 {
      .info-title {
        >i {
          background: url("./images/03.png") no-repeat;
          background-size: contain;
        }
      }
      .item-box {
        .item-icon {
          background: url("./images/line3.png") no-repeat;
          background-size: contain;
        }
      }
    }
  }
  .home-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    background: #3A3A3A;
    font-size: 14px;
    font-weight: 400;
    color: #C3C3C3;
    line-height: 23px;
    margin-top: 80px;
    .clause {
      cursor: pointer;
      a  {
        color: #C3C3C3!important;
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width: 828px) {
    min-width: 100%;
    .home-banner {
      background: url("./images/phone-banner.png") no-repeat;
      background-size: contain;
      .ios-btn {
        width: 180px;
        height: 60px;
        position: absolute;
        top: 190px;
        left: 60px;
        display: block;
        opacity: 0;
        outline: none;
      }
      .android-btn {
        width: 180px;
        height: 60px;
        position: absolute;
        top: 270px;
        left: 60px;
        display: block;
        opacity: 0;
        outline: none;
      }
      .banner-info {
        display: none;
      }
    }
    .home-item {
      padding: 54px 54px 91px;
      .info-title {
        font-size: 34px;
        margin-bottom: 36px;
        width: 100%;
        &.is-phone {
          display: flex;
        }
        &.is-pc {
          display: none;
        }
      }
      .item-box {
        display: flex;
        align-items: center;
        width: 100%;
        .item-icon {
          margin-right: 24px;
          flex-shrink: 0;
        }
        .item-info {
          flex-grow: 1;
          .info-desc {
            font-size: 24px;
            line-height: 50px;
          }
        }
      }
      
      &:nth-child(2n - 1) {
        .item-box {
          .item-icon {
            margin-right: 0;
            margin-left: 24px;
          }
        }
      }
    }
    .home-footer {
      width: 100%;
      height: 120px;
      background: #3A3A3A;
      font-size: 24px;
      font-weight: 400;
      color: #C3C3C3;
      line-height: 36px;
      .clause {
        cursor: pointer;
      }
    }
  }
}
</style>