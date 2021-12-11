<template>
  <div class="layout-content">
    <div class="layout-header">
      <i class="header-logo" @click="handleSelect('home')"></i>
      <div class="nav-line">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-vertical-demo"
              mode="horizontal"
              background-color="#0E0D12"
              text-color="#D3D3D7"
              active-text-color="#F9BF3C"
              @select="handleSelect"
            >
              <el-sub-menu index="introduce">
                <template #title>
                  <!-- 介绍 -->
                  <span>{{$t('header.introduction')}}</span>
                </template>
                <!-- dFuture平台 -->
                <el-menu-item index="dFuture">{{$t('header.dFuture')}}</el-menu-item>
                <!-- dft概览 -->
                <el-menu-item index="dft-overview">{{$t('header.dft-overview')}}</el-menu-item>
                <!-- <el-menu-item index="dft">DFT</el-menu-item> -->
              </el-sub-menu>
              <el-sub-menu index="product">
                <template #title>
                  <!-- 产品 -->
                  <span>{{$t('header.product')}}</span>
                </template>
                <el-menu-item index="trade">{{$t('header.transaction')}}</el-menu-item>
                <el-menu-item index="pool">{{$t('header.pool')}}</el-menu-item>
                <!-- <el-menu-item index="dft">DFT抵押分红</el-menu-item>
                <el-menu-item index="lptoken">二池抵押分红</el-menu-item>-->
              </el-sub-menu>
              <el-sub-menu index="community">
                <template #title>
                  <!-- 社区 -->
                  <span>{{$t('header.community')}}</span>
                </template>
                <el-menu-item index="telegram-zh">
                  <i class="layout-icon icon-telegram-zh"></i>
                  {{$t('header.telegram_zh')}}
                </el-menu-item>
                <el-menu-item index="telegram-en">
                  <i class="layout-icon icon-telegram-en"></i>Telegram EN
                </el-menu-item>
                <el-menu-item index="discord">
                  <i class="layout-icon icon-discord"></i>Discord
                </el-menu-item>
                <el-menu-item index="reddit">
                  <i class="layout-icon icon-reddit"></i>Reddit
                </el-menu-item>
                <el-menu-item index="twitter">
                  <i class="layout-icon icon-twitter"></i>Twitter
                </el-menu-item>
                <el-menu-item index="medium">
                  <i class="layout-icon icon-medium"></i>Medium
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 交易 -->
      <el-button
        @click="handleSelect('trade')"
        class="primary-color nav-btn"
        round
      >{{$t('header.transaction')}}</el-button>
      <el-dropdown class="nav-dropdown font-color">
        <span class="el-dropdown-link">
          <i class="icon-language"></i>
          {{$t('header.language')}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeLocale('zh-CN')">中文</el-dropdown-item>
            <el-dropdown-item @click="changeLocale('en-US')">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="layout-mobile-header">
      <i class="header-logo" @click="handleSelect('home')"></i>
      <i class="header-memu" @click="drawer = true"></i>
      <el-drawer v-model="drawer" size="70%" :with-header="false">
        <div class="memu-line">
          <div class="logo-line" @click="drawer = false">
            <i class="header-logo" @click="handleSelect('home')"></i>
          </div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#2D2C3C"
            text-color="#D3D3D7"
            active-text-color="#F9BF3C"
            @select="handleSelect"
          >
            <el-sub-menu index="introduce">
              <template #title>
                <!-- 介绍 -->
                <span>{{$t('header.introduction')}}</span>
              </template>
              <!-- dFuture平台 -->
              <el-menu-item index="dFuture">{{$t('header.dFuture')}}</el-menu-item>
              <!-- <el-menu-item index="dft">DFT</el-menu-item> -->
            </el-sub-menu>
            <el-sub-menu index="product">
              <template #title>
                <!-- 产品 -->
                <span>{{$t('header.product')}}</span>
              </template>
              <el-menu-item index="trade">{{$t('header.transaction')}}</el-menu-item>
              <el-menu-item index="pool">{{$t('header.pool')}}</el-menu-item>
              <!-- <el-menu-item index="dft">DFT抵押分红</el-menu-item>
              <el-menu-item index="lptoken">二池抵押分红</el-menu-item>-->
            </el-sub-menu>
            <el-sub-menu index="community">
              <template #title>
                <!-- 社区 -->
                <span>{{$t('header.community')}}</span>
              </template>

              <el-menu-item index="telegram-zh">
                <i class="layout-icon icon-telegram-zh"></i>
                {{$t('header.telegram_zh')}}
              </el-menu-item>
              <el-menu-item index="telegram-en">
                <i class="layout-icon icon-telegram-en"></i>Telegram EN
              </el-menu-item>
              <el-menu-item index="discord">
                <i class="layout-icon icon-discord"></i>Discord
              </el-menu-item>
              <el-menu-item index="reddit">
                <i class="layout-icon icon-reddit"></i>Reddit
              </el-menu-item>
              <el-menu-item index="twitter">
                <i class="layout-icon icon-twitter"></i>Twitter
              </el-menu-item>
              <el-menu-item index="medium">
                <i class="layout-icon icon-medium"></i>Medium
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
          <div class="nav-btn-line">
            <el-button
              @click="handleSelect('trade')"
              class="primary-color nav-btn"
            >{{$t('header.transaction')}}</el-button>
          </div>
          <div class="change-language">
            <span
              :class="{'active': $i18n.locale === 'zh-CN'}"
              @click="changeLocale('zh-CN')"
            >中文</span>
            <span
              :class="{'active': $i18n.locale === 'en-US'}"
              @click="changeLocale('en-US')"
            >English</span>
          </div>
        </div>
      </el-drawer>
    </div>
    <div class="layout-home">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import Cookies from 'js-cookie';
import { ElMessageBox, ElMessage } from 'element-plus';

import { arbitrumUrl } from '@/config';

export default defineComponent({
  computed: {
    activeIndex() {
      const { name } = this.$route;
      return name;
    },
  },
  setup() {
    onMounted(() => {
      console.log('Component is mounted!')
    });
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const route = useRoute();
    const arbitrumUrlList = ['trade', 'pool', 'dft', 'lptoken', 'dft-overview'];
    const drawer = ref(false);
    const width = document.body.clientWidth;
    const isMobile = /micromessenger|iphone|ipad|ipod|ios|Android/i.test(navigator.userAgent) || width <= 828;
    const handleSelect = (name) => {
      drawer.value = false;
      if (arbitrumUrlList.includes(name)) {
        window.open(`${arbitrumUrl}${name}`)
        return;
      }
      if (name === 'telegram-zh') {
        if (isMobile) {
          showMessage('https://t.me/dfuturechinese', 'telegram');
          return;
        }
        window.open('https://t.me/dfuturechinese');
        return;
      }
      if (name === 'telegram-en') {
        if (isMobile) {
          showMessage('https://t.me/dfutureglobal', 'telegram');
          return;
        }
        window.open('https://t.me/dfutureglobal');
        return;
      }
      if (name === 'discord') {
        if (isMobile) {
          showMessage('https://discord.gg/NfmgXZPF9c', 'discord');
          return;
        }
        window.open('https://discord.gg/NfmgXZPF9c');
        return;
      }
      if (name === 'reddit') {
        if (isMobile) {
          showMessage('https://discord.gg/NfmgXZPF9c', 'reddit');
          return;
        }
        window.open('https://www.reddit.com/user/dFuture_finance/');
        return;
      }
      if (name === 'twitter') {
        if (isMobile) {
          showMessage('https://discord.gg/NfmgXZPF9c', 'twitter');
          return;
        }
        window.open('https://twitter.com/dFuture_finance');
        return;
      }
      if (name === 'medium') {
        if (isMobile) {
          showMessage('https://discord.gg/NfmgXZPF9c', 'medium');
          return;
        }
        window.open('https://dfuture--finance.medium.com/');
        return;
      }
      router.push({ name });
    }
    const changeLocale = (locale) => {
      drawer.value = false;
      // const locale = proxy.$i18n.locale === 'en-US' ? 'zh-CN' : 'en-US';
      proxy.$i18n.locale = locale;
      Cookies.set('currentLocale', locale, { expires: 90 });
      // 去除locale
      if (route.query.locale) {
        route.push(route.path);
      }
    }
    const showMessage = (url, type) => {
      ElMessageBox.alert(proxy.$t('home.tips_network', { type, url }), proxy.$t('home.tips'), {
        center: true,
        confirmButtonText: proxy.$t('page.copy'),
        confirmButtonClass: 'primary-color',
        callback: async (action) => {
          if (action === 'confirm') {
            try {
              await proxy.$copyText(url);
              ElMessage({
                type: 'success',
                message: proxy.$t('page.copy_successfully'),
              })
            } catch (error) {
              ElMessage({
                type: 'error',
                message: proxy.$t('page.copy_failed'),
              })
            }
          }
        },
      })
    }
    return {
      handleSelect,
      changeLocale,
      drawer,
    }
  },
})
</script>
<style lang='less'>
.layout-content {
  height: 100%;
  .layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: #0e0d12;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    .el-sub-menu__icon-arrow {
      display: none;
    }
    .header-logo {
      cursor: pointer;
      width: 132px;
      height: 24px;
      background: url("../assets/images/logo.svg") no-repeat;
      background-size: contain;
      font-size: 20px;
    }
    .change-language {
      color: #fff;
    }
    .nav-line {
      display: flex;
      flex-grow: 1;
      .el-row {
        height: 64px;
        width: 100%;
        .el-menu--horizontal {
          border-bottom: none;
        }
        .el-menu {
          height: 64px;
          justify-content: flex-end;
          .el-sub-menu__title,
          .el-menu-item {
            height: 58px;
            padding: 0 12px;
            margin: 0 14px;
            line-height: 64px;
            font-size: 16px;
          }
        }
      }
    }
    .nav-btn {
      min-width: 88px;
      height: 36px;
      font-size: 16px;
      letter-spacing: 0;
      margin: 0 52px;
      padding: 10px 28px;
    }
    .nav-dropdown {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 14px;
      letter-spacing: 0;
      line-height: 14px;
      cursor: pointer;
    }
    .el-dropdown-link {
      display: flex;
      align-items: center;
    }
    .icon-language {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url("../assets/images/language.svg") no-repeat;
      background-size: contain;
      margin-right: 4px;
    }
    .el-icon-arrow-down {
      font-weight: 800;
    }
  }
  .layout-mobile-header {
    display: none;
  }
  .layout-home {
    padding-top: 64px;
  }
  @media screen and (max-width: 828px) {
    .layout-header {
      display: none;
    }
    .layout-mobile-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 104px;
      background: #0e0d12;
      z-index: 99;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px;
      .header-logo {
        cursor: pointer;
        width: 264px;
        height: 48px;
        background: url("../assets/images/logo.svg") no-repeat;
        background-size: contain;
        font-size: 20px;
      }
      .header-memu {
        width: 40px;
        height: 40px;
        background: url("../assets/images/icon-memu.png") no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      .el-drawer__body {
        padding: 0;
      }
      .memu-line {
        width: 100%;
        height: 100vh;
        background: #2d2c3c;
        overflow-y: auto;
        .logo-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 112px;
          padding: 0 38px;
        }
        .el-menu {
          border-right: 0;
        }
      }
      .nav-btn-line {
        margin: 60px 0 108px;
        padding: 0 40px;
        .nav-btn {
          width: 100%;
          font-size: 32px;
        }
      }
      .change-language {
        display: flex;
        justify-content: center;
        font-size: 32px;
        color: #e7e7e9;
        letter-spacing: 0;
        line-height: 1.5;
        font-weight: 400;
        margin-bottom: 68px;
        > span {
          &.active {
            border-bottom: 6px solid #f9bf3c;
          }
          margin: 0 40px;
          padding-bottom: 16px;
        }
      }
    }
    .layout-home {
      padding-top: 104px;
    }
  }
}
</style>