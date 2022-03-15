<style lang="less">
  @import './memberList.less';
</style>

<template>
    <Row>
        <Col class="addMember">
            <Card>
                <p slot="title">添加会员 </p>
                <p>
                  <router-link :to="{ name: 'memberList'}" class="back">
                      <Icon type="md-arrow-round-back" />返回
                  </router-link>
                  <div class="info"> <span></span> 基本信息</div>
                  <Form class="addMemberForm" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="用户名:" prop="username">
                        <Input v-model="formValidate.username" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="密码:" prop="password">
                        <Input type="password" v-model="password" placeholder=""></Input>
                    </FormItem>
                    <FormItem class="nation" label="国籍" prop="nation">
                        <Select filterable  v-model="formValidate.nation" placeholder="">
                          <Option :value="country.name" v-for="country in allCountry" :key="country.name">{{country.name}}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="真实姓名:" prop="name">
                        <Input v-model="formValidate.name" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="手机号码:" prop="phone1">
                      <Input type="number" v-model="formValidate.phone1" @input="checkPhone()" @change="checkPhone()">
                          <span slot="prepend">+855</span>
                      </Input>
                      <div class="ivu-form-item-error-tip" v-if="!isValid">无效的电话号码</div>
                    </FormItem>
                    <FormItem label="其他联系方式:" prop="mobile2">
                        <Input v-model="formValidate.mobile2" placeholder=""></Input>
                    </FormItem>
                    <FormItem label=" 会员性别" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio :label='1' :value='1'>
                                <span>男</span>
                            </Radio>
                            <Radio :label='0' :value='0'>
                                <span>女</span>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="用户状态" prop="status">
                        <RadioGroup v-model="formValidate.status">
                            <Radio :label='1' :value='1'>
                                <span>启用</span>
                            </Radio>
                            <Radio :label='2' :value='2'>
                                <span>禁用</span>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                     <FormItem label="会员标签" prop="memberTag">
                        <Select v-model="formValidate.memberTag" placeholder="请选择">
                          <Option value="1">内部员工</Option>
                          <Option value="2">外部用户</Option>
                        </Select>
                    </FormItem>
                    <div class="identify">
                    </div>
                      <FormItem label="证件类型" prop="partport" style="margin-top: 70px">
                        <Input v-model="formValidate.partport" placeholder=""></Input>
                      </FormItem>
                      <FormItem label="证件号码" prop="certificate">
                        <Input v-model="formValidate.certificate" placeholder=""></Input>
                      </FormItem>
                      <FormItem label="证件照片" prop="image">
                        <input ref="file" type="file" id="upload" hidden @change="handleFileUpload($event)" accept="image/*"/>
                        <label for="upload">
                          <div class="add-image-container">
                            <Icon type="md-add" />
                            <p>上传</p>
                          </div>
                        </label>
                        <div class="image-container">
                          <!-- <div class="image-inner-container"> -->
                            <img src="@/assets/images/logo-min.jpg"/>
                            <p>示例图</p>
                            <Icon type="md-search" @click="imagePreviewModal = true" />
                          <!-- </div> -->
                        </div>
                        
                      </FormItem>
                    
                    <FormItem style="margin-top: 70px">
                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
                </p>
            </Card>
        </Col>
        <Modal
            title=""
            v-model="imagePreviewModal"
            class-name="vertical-center-modal update_role"
            >
            <img style="height:500px; width:auto" src="@/assets/images/home-login.png" />
        </Modal>
    </Row>
</template>
<script>
import api from '@/store/module/api'
import country from '@/assets/json/country.json'

export default {
  data () {
    return {
      vertical: 1,
      formValidate: {
        username: '',
        password: '',
        nation: '',
        name: '',
        phone1: '',
        mobile: '',
        mobile2: '',
        status: 1,
        memberType: 1,
        gender: 1,
        memberTag: 0,
        partport: '',
        certificate: '',
        imageLink: ''
      },
      image: '',
      password: '',
      ruleValidate: {
        username: [
          { required: true, message: '用户名是必需的', trigger: 'blur' }
        ],
        nation: [
          { required: true, message: '国家是必需的', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名为必填项', trigger: 'blur' }
        ],
        phone1: [
          { required: true, message: '电话号码为必填项', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '电话号码为必填项', trigger: 'blur' }
        ],
        mobile2: [
          { required: true, message: '其他联系方式必填项', trigger: 'blur' }
        ],
        memberTag: [
          { required: true, message: '会员标签是必需的', trigger: 'blur' }
        ],
      },
      isValid: true,
      allCountry: country,
      imagePreviewModal: false
    }
  },
  created () {
    if (this.$route.params.id !== 0 && this.$route.params.id > 0) {
      api.post('admin/member/getMemberInfoById', { id: parseInt(this.$route.params.id) })
        .then(res => {
          this.formValidate = res.data.data
          this.formValidate.phone1 = this.formValidate.mobile.slice(3)
        })
    } else {
      this.$router.push({ name: 'memberList' })
    }
  },
  methods: {
    checkPhone () {
      if (this.formValidate.phone1 < 11111111 || this.formValidate.phone1 > 999999999) {
        this.isValid = false
      } else {
        this.isValid = true
      }
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      console.log(file)
      // const formData = new FormData();
      // formData.append("file", this.file);
      // try {
      //   this.rechargeForm.pics = await this.$services.bank.sendTransferReceipt(formData);
      //   this.imgUploadError = "";
      // } catch (error) {
      //   this.imgUploadError = error.message;
      // }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.isValid === true) {
            const phoneNumber = this.formValidate.phone1
            if (parseInt(phoneNumber.charAt(0)) === 0) {
              this.formValidate.phone1 = phoneNumber.slice(1)
            }

            if (this.password !== '') {
              this.formValidate.password = this.password
            }
            this.formValidate.mobile = '855' + this.formValidate.phone1
            api.post('/admin/member/editMember', this.formValidate)
              .then(res => {
                if (res.data.code === 200) {
                  this.$Message.success(res.data.msg)
                  setTimeout(() => this.$router.push({ name: 'memberList' }), 1000)
                } else {
                  this.$Message.error(res.data.msg)
                }
              })
          } else {
            this.$Message.error('无效的电话号码')
          }
        } else {
          this.$Message.error(this.$i18n.t('fail'))
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
