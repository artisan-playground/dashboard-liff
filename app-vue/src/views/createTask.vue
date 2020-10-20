<template>
  <div>
    <ToolbarBack />
    <br />
    <div style="margin: 60px 18px 0px 18px">
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row>
          <a-form-item label="Task name">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: 'Please enter Task name' }],
                },
              ]"
              placeholder="Task name"
            />
          </a-form-item>
        </a-row>
        <a-row style="">
          <a-form-item label="Members">
            <a-mentions
              placeholder="input @ to mention people, # to mention tag"
              :prefix="['@', '#']"
              @search="onSearch"
            >
              <a-mentions-option
                v-for="value in MOCK_DATA[prefix] || []"
                :key="value"
                :value="value"
              >
                {{ value }}
              </a-mentions-option>
            </a-mentions>
          </a-form-item>
          <a-form-item label="Type">
            <a-select
              v-decorator="[
                'type',
                {
                  rules: [{ required: true, message: 'Please choose the type' }],
                },
              ]"
              placeholder="Please choose the type"
            >
              <a-select-option value="private">
                Full-time
              </a-select-option>
              <a-select-option value="public">
                Intern
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="Approver">
            <a-mentions
              placeholder="input @ to mention people, # to mention tag"
              :prefix="['@', '#']"
              @search="onSearch"
            >
              <a-mentions-option
                v-for="value in MOCK_DATA[prefix] || []"
                :key="value"
                :value="value"
              >
                {{ value }}
              </a-mentions-option>
            </a-mentions>
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="DateTime">
            <a-col :span="12">
              <a-date-picker
                style="min-width: 50px; font-size:14px;"
                v-model="startValue"
                :disabled-date="disabledStartDate"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Start"
                @openChange="handleStartOpenChange"
              />
            </a-col>
            <a-col :span="12">
              <a-date-picker
                style="min-width: 50px; font-size:14px;"
                v-model="endValue"
                :disabled-date="disabledEndDate"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="End"
                :open="endOpen"
                @openChange="handleEndOpenChange"
              />
            </a-col>
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="Description">
            <a-textarea
              v-decorator="[
                'description',
                {
                  rules: [{ required: true, message: 'Please enter url description' }],
                },
              ]"
              :rows="4"
              placeholder="please enter url description"
            />
          </a-form-item>
        </a-row>
        <a-row>
          <v-btn
            block
            color="primary"
            elevation="2"
            to="/editprofile"
            style="text-transform: capitalize; background-color: #105EFB;"
            >Submit</v-btn
          >
        </a-row>
      </a-form>
    </div>
    <BarRouter />
  </div>
</template>

<script>
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'

const MOCK_DATA = {
  '@': ['Chalobon', 'NaN', 'pupaeng.’'],
  '#': ['1.0', '2.0', '3.0'],
}
export default {
  name: 'createTask',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    return {
      prefix: '@',
      MOCK_DATA,
      startValue: null,
      endValue: null,
      endOpen: false,
    }
  },
  watch: {
    startValue(val) {
      console.log('startValue', val)
    },
    endValue(val) {
      console.log('endValue', val)
    },
  },
  methods: {
    onSearch(_, prefix) {
      console.log(_, prefix)
      this.prefix = prefix
    },
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    },
  },
}
</script>

<style>
div {
  font-family: 'Roboto';
}
.ant-calendar-picker {
  min-width: 50px;
}
</style>
