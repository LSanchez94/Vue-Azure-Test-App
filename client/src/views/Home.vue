<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <h1>New Customer {{valid}}</h1>
        <v-form
        ref="form"
    v-model="valid">
          <v-text-field
            v-model="form.Name"
            label="Name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Address"
            label="Address"
            :rules="addressRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Phone"
            label="Phone"
            :rules="phoneRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.Age"
            label="Age"
            :rules="ageRules"
            required
          ></v-text-field>
          <v-btn class="px-6 py-5" color="primary" dark @click="validate()">SEND</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  data: () => ({
    valid: true,
    form: {},
    nameRules: [
      v => !!v || 'Name is required',
    ],
    addressRules: [
      v => !!v || 'Address is required',
    ],
    phoneRules: [
      v => !!v || 'Phone is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
    ],
    ageRules: [
      v => !!v || 'Age is required',
    ],
  }),
  methods: {
    validate(){
      this.$refs.form.validate()
      if(this.valid){
        this.saveCustomer();
      }
    },
    saveCustomer(){
      axios.post("https://saverfunction.azurewebsites.net/api/Saver?code=D3BCDnKeFHpv4CuTy9U0B8Pw87UTPpnO/tY26eWDyZZQ0OAL91IvPw==", this.form).then((res) => {
        alert(res.data);
        this.form = {}
      }).catch(err => {
        alert("An Error Ocurred")
      })
    }
  }
};
</script>
