<template>
  <el-dialog
    :model-value="visible"
    center
    :title="$t('home.contact_us')"
    custom-class="dialog-contact-us"
    @close="$emit('close')"
  >
    <div class="contact-us-body">
      <div class="input-line">
        <div class="input-item flex-04">
          <label><i class="danger-color">*</i> {{$t('home.name')}}</label>
          <el-input v-model="contactName" />
        </div>
        <div class="input-item flex-06">
          <label><i class="danger-color">*</i> {{$t('home.email')}}</label>
          <el-input v-model="contactEmail" />
        </div>
      </div>
      <div class="input-line">
        <div class="input-item">
          <label><i class="danger-color">*</i> {{$t('home.message')}}</label>
          <el-input
            type="textarea"
            v-model="msg"
            resize="none"
          />
        </div>
      </div>
      <div class="submit-line">
        <el-checkbox v-model="checked">{{$t('home.email_subscription')}}</el-checkbox>
        <el-button
          @click="addUser"
          :disabled="!contactName || !contactEmail || !msg || !checked"
          class="primary-color submit-btn"
        >{{$t('home.submit')}}</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

import { addUserContactRecord } from '@/api';

export default {
  props: {
    visible: Boolean,
  },
  setup(props, context) {
    const contactName = ref('');
    const contactEmail = ref('');
    const msg = ref('');
    const checked = ref(true);
    const loading = ref(false);

    const addUser = async () => {
      loading.value = true;
      const { success } = await addUserContactRecord({
        contactName: contactName.value,
        contactEmail: contactEmail.value,
        msg: msg.value,
        emailSub: checked.value,
        userAddress: 'unknow',
      });
      loading.value = false;
      if (success) {
        context.emit('close');
        ElMessage({
          message: '已提交',
          type: 'success',
        });
      }
    }

    // 暴露给 template
    return {
      contactName,
      contactEmail,
      msg,
      checked,
      addUser,
      loading,
    }
  }
};
</script>
<style lang='less'>
.dialog-contact-us {
  width: 760px;
  border-radius: 16px;
  .el-dialog__header {
    padding-top: 48px
  };
  .el-dialog__title {
    font-size: 32px;
    color: #FFFFFF;
    line-height: 32px;
    font-weight: 500;
  }
  .el-dialog__body {
    padding: 48px 24px;
  }
  .contact-us-body {
    display: flex;
    flex-direction: column;
    .el-input {
      height: 40px;
      border-radius: 6px;
    }
    .el-textarea {
      .el-textarea__inner {
        height: 120px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .el-input__inner, .el-textarea__inner {
      background: rgba(0,0,0,0.20);
      border: 1px solid #5E5C6B;
      color: #D3D3D7;
    }
    .input-line {
      display: flex;
      .input-item {
        display: flex;
        flex: 0.5;
        margin: 0 10px 16px;
        flex: 1;
        &.flex-04 {
          flex: 0.4;
        }
        &.flex-06 {
          flex: 0.6;
        }
        >label {
          min-width: 60px;
          text-align: right;
          flex-shrink: 0;
          font-size: 14px;
          color: #D3D3D7;
          letter-spacing: 0;
          line-height: 40px;
          font-weight: 400;
          margin-right: 10px;
        }
      }
    }
    .submit-line {
      display: flex;
      justify-content: space-between;
      padding: 0 10px 0 80px;
      .submit-btn {
        min-width: 160px;
      }
    }
  }
  @media screen and (max-width: 828px) {
    width: 764px;
    border-radius: 28px;
    .el-icon-close {
      font-size: 60px;
    }
    .el-dialog__header {
      padding-top: 80px
    };
    .el-dialog__title {
      font-size: 48px;
      line-height: 72px;
    }
    .el-dialog__body {
      padding: 60px 40px;
    }
    .contact-us-body {
      display: flex;
      flex-direction: column;
      .el-input {
        height: 80px;
        border-radius: 8px;
      }
      .el-textarea {
        .el-textarea__inner {
          height: 240px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
      .input-line {
        display: flex;
        flex-direction: column;
        .input-item {
          flex: 1;
          margin: 0 0 32px;
          &.flex-04 {
            flex: 1;
          }
          &.flex-06 {
            flex: 1;
          }
          >label {
            min-width: 140px;
            font-size: 28px;
            color: #D3D3D7;
            line-height: 80px;
            margin-right: 20px;
          }
        }
      }
      .submit-line {
        display: flex;
        justify-content: space-between;
        padding: 0 10px 0 160px;
        .submit-btn {
          min-width: 220px;
        }
      }
    }
  }
}
</style>