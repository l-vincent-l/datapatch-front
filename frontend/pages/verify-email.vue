<template>
    <v-container 
      fill-height
      >

      <v-row
        fill-height
        class="justify-center align-center"
        >

        <v-col 
          cols="6"
          >

          <div class="text-center mt-5">
            <LogoAnimated
              :yoyo="true"
              :repeat="isLoading ? -1 : 0"
              :animated="true"
              :height="'300px'"
            />
          </div>

          <v-card 
            elevation="0"
            class="pa-1">

            <v-card-title class="justify-center mb-3 px-0">
              <v-icon>
                icon-log-search1
              </v-icon>

              <span class="ml-3 text-center">
                <span v-if="!hasFailed && !isVerified">
                  {{ $t('login.verifyEmail') }}
                </span>
                <span v-if="!hasFailed && isVerified">
                  {{ $t('login.verifyOk') }}
                  <br>
                  {{ $t('login.verifyOk2') }}
                </span>
                <span v-if="hasFailed && !isVerified">
                  {{ $t('login.failVerify') }}
                </span>
              </span>

            </v-card-title>

            <Alert 
              :dismissible="true"
            />

            <br/>

            <v-container v-if="isVerified || hasFailed" class="mt-4">
              <v-row>
                <v-col cols="12" class="px-0">
                  <v-btn 
                    color="primary"
                    block
                    tile
                    elevation="0"
                    dark
                    :to="`/${isVerified ? 'login' : ''}`"
                    router
                    >
                    <span v-if="isVerified" class="text-center">
                      {{ $t('login.in') }}
                    </span>
                    <span v-else class="text-center">
                      {{ $t('pages.home') }}
                    </span>
                  </v-btn>
                </v-col>

              </v-row>
            </v-container>


          </v-card>

        </v-col>

      </v-row>

    </v-container>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {

  name: 'VerifyEmail',
  data () {
    return {
      pathItems: [
        { 
          text: 'login.verifyEmail',
          disabled: true,
          to: '/verify-email',
        }
      ],
      isVerified: false,
      tokenToCheck: undefined,
    }
  },
  watch: {
    tokenToCheck(next) {
      if (next) {
        this.verifyEmail(next)
      }
    }
  },
  beforeMount () {
    this.updatePath(this.pathItems)
  },
  mounted () {
    let tokenFromUrl = this.$route.query
    // this.log && console.log('P-VerifyEmail > tokenFromUrl : ', tokenFromUrl)
    this.tokenToCheck = tokenFromUrl.token
  },
  computed: {
    ...mapState({
      log: (state) => state.log,
      api: (state) => state.api,
      isLoading: (state) => state.dialogs.isLoading,
    }),
    ...mapGetters({
      hasFailed: 'dialogs/hasFailed'
    })
  },
  methods: {
    ...mapActions({
      updatePath: 'updateCrumbsPath',
    }),
    verifyEmail(token) {
      this.alert = false
      this.log && console.log('P-VerifyEmail > token : ', token)
      let url = `${this.api.users}/verify-email/?token=${token}`
      this.log && console.log('P-VerifyEmail > url : ', url)
      this.$axios
        .get(url)
        .then(resp => {
          this.log && console.log('P-VerifyEmail > resp : ', resp)
          this.isVerified = true
        })
    }
  }
}

</script>
