<template>
  <div>
    <form ref="formRef" novalidate @submit.stop.prevent="handleSubmit" @reset="handleReset">
      <b-form-group label="Bot Name" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="auth.botName"
          placeholder="Bot Name"
          @keydown.enter="handleOk"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        :state="urlState"
        label="API Url"
        label-for="url-input"
        invalid-feedback="API Url required"
      >
        <b-form-input
          id="url-input"
          v-model="auth.url"
          required
          trim
          :state="urlState"
          @keydown.enter="handleOk"
        ></b-form-input>
        <b-alert
          v-if="urlDuplicate"
          class="mt-2 p-1 alert-wrap"
          :model-value="true"
          variant="warning"
        >
          This URL is already in use by another bot.
        </b-alert>
      </b-form-group>
      <b-form-group
        :state="nameState"
        label="Username"
        label-for="username-input"
        invalid-feedback="Name and Password are required."
      >
        <b-form-input
          id="username-input"
          v-model="auth.username"
          required
          placeholder="Freqtrader"
          :state="nameState"
          @keydown.enter="handleOk"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="password-input"
        invalid-feedback="Invalid Password"
        :state="pwdState"
      >
        <b-form-input
          id="password-input"
          v-model="auth.password"
          required
          type="password"
          :state="pwdState"
          @keydown.enter="handleOk"
        ></b-form-input>
      </b-form-group>
      <div>
        <b-alert v-if="errorMessage" class="alert-wrap" :model-value="true" variant="warning">
          {{ errorMessage }}
          <br />
          <span v-if="errorMessageCORS">
            Please also check your bot's CORS configuration:
            <a href="https://www.freqtrade.io/en/latest/rest-api/#cors"
              >Freqtrade CORS documentation</a
            ></span
          >
        </b-alert>
      </div>
      <div v-if="inModal === false" class="float-end">
        <b-button class="me-2" type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { AuthPayload, AuthStorageWithBotId } from '@/types';

import { useBotStore } from '@/stores/ftbotwrapper';
import { useRoute, useRouter } from 'vue-router';
import { useCredentialsService } from '@/shared/credentialsService';

const props = defineProps({
  inModal: { default: false, type: Boolean },
  existingAuth: { default: null, required: false, type: Object as () => AuthStorageWithBotId },
});
const emit = defineEmits(['loginResult']);

const defaultURL = window.location.origin || 'http://localhost:3000';

const router = useRouter();
const route = useRoute();
const botStore = useBotStore();

const nameState = ref<boolean>();
const pwdState = ref<boolean>();
const urlState = ref<boolean>();
const errorMessage = ref<string>('');
const errorMessageCORS = ref<boolean>(false);
const formRef = ref<HTMLFormElement>();
const botEdit = ref<boolean>(false);
const auth = ref<AuthPayload>({
  botName: '',
  url: defaultURL,
  username: '',
  password: '',
});

const emitLoginResult = (value: boolean) => {
  emit('loginResult', value);
};

const urlDuplicate = computed<boolean>(() => {
  const bots = Object.values(botStore.availableBots).find((bot) => bot.botUrl === auth.value.url);
  return !botEdit.value && bots !== undefined;
});

const checkFormValidity = () => {
  const valid = formRef.value?.checkValidity();
  nameState.value = valid || auth.value.username !== '';
  pwdState.value = valid || auth.value.password !== '';
  urlState.value = valid || auth.value.url !== '';
  return valid;
};

const resetLogin = () => {
  auth.value.botName = '';
  auth.value.url = defaultURL;
  auth.value.username = '';
  auth.value.password = '';
  nameState.value = undefined;
  pwdState.value = undefined;
  urlState.value = undefined;
  errorMessage.value = '';
  botEdit.value = false;
};

const handleReset = (evt) => {
  evt.preventDefault();
  resetLogin();
};
const handleSubmit = async () => {
  // Exit when the form isn't valid
  if (!checkFormValidity()) {
    return;
  }
  errorMessage.value = '';
  const credentialsService = useCredentialsService();
  credentialsService.saveBotCredentials(auth.value.username, auth.value.password, auth.value.url);
  emitLoginResult(true);
  router.push('/');
};

const handleOk = (evt) => {
  evt.preventDefault();
  handleSubmit();
};
const reset = () => {
  resetLogin();
  console.log('reset ', props.existingAuth);
  if (props.existingAuth) {
    botEdit.value = true;
    auth.value.botName = props.existingAuth.botName;
    auth.value.url = props.existingAuth.apiUrl;
    auth.value.username = props.existingAuth.username ?? '';
  }
};

defineExpose({
  handleSubmit,
  reset,
});
</script>

<style scoped lang="scss">
.alert-wrap {
  white-space: pre-wrap;
}
</style>
