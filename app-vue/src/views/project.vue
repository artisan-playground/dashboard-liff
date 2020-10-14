<template>
  <div>
    <ToolbarBack />
    <br />
    <v-row style="margin: 60px 0px 0px 0px">
      <v-col cols="3" style="padding: 12px 0px 0px 18px">
        <img id="imgProject" v-bind:src="dataProject.projectImage" alt="" />
      </v-col>
      <v-col cols="9" style="vertical-align: middle; font-size:16px" align="left">
        <div>
          <b>{{ dataProject.projectName }}</b>
        </div>
        <div id="position" style="">
          {{ dataProject.projectType }}
        </div>
        <div style="padding-top: 8px; font-size:14px">
          {{ dataProject.projectDetail }}
        </div>
      </v-col>
    </v-row>

    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="carry-out" style="color:#105EFB" /></div>
          <div><b>2</b></div>
          <div id="position" style="padding-bottom:10px">Done Task</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="smile" style="color:#105EFB" /></div>
          <div><b>3</b></div>
          <div id="position" style="padding-bottom:10px">Developer</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="profile" style="color:#105EFB" /></div>
          <div><b>2</b></div>
          <div id="position" style="padding-bottom:10px">Today's Task</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Date -->
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col v-if="project">
        <v-card>
          <div style="padding-top:10px"><a-icon type="calendar" style="color:#105EFB" /></div>
          <div>
            <b>{{ dataProject.dueDate }}</b>
          </div>
          <div id="position" style="padding-bottom:10px">Release Date</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tasks -->
    <div>
      <v-row style="margin-left:6px; margin-right:6px;">
        <v-col><span style="float:left; font-size:20px; font-weight:550">Task</span></v-col>
        <v-col>
          <v-btn
            @click="showDrawer()"
            color="primary"
            style="float:right; text-transform: capitalize; background-color: #105EFB; border-radius: 15px;"
            ><a-icon type="plus-circle" style="margin-right:2.5px" />Create</v-btn
          >
        </v-col>
      </v-row>
      <div v-for="task in dataTask" :key="task.id" style="margin-left:6px; margin-right:6px;">
        <v-card id="card" align="left" :to="{ name: 'taskDetail', params: { id: task.id } }">
          <div style="padding-left:15px">
            <v-row>
              <v-col>
                <v-row>
                  <b>
                    {{ task.taskName }} <a-icon style="color:#105EFB" type="paper-clip" /><a-icon
                      style="color:#105EFB"
                      type="message"
                    />
                  </b>
                </v-row>
                <v-row id="position">
                  {{ task.startTime }}
                </v-row>
              </v-col>
              <v-col align="right" id="status">
                <a-tag color="red"
                  style="margin-right: 0px;"
                  v-if="task.isDone == false"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="carbon:warning"
                  ></span>
                  WIP
                </a-tag>
                <a-tag color="green"
                  style="margin-right: 0px;"
                  v-if="task.isDone == true"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="octicon:check-circle-24"
                  ></span>
                  Done
                </a-tag>
              </v-col>
            </v-row>
            <v-row>
              <div>{{ task.taskDetail }}</div>
            </v-row>

            <!-- list members -->
            <v-row>
              <v-col align="right" style="padding-right: 16px;">
                <vs-avatar-group float max="4" style="float:right; margin-top:10px;">
                  <vs-avatar
                    v-for="member in task.members"
                    :key="member.id"
                    style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
                  >
                    <img v-bind:src="member.image" />
                  </vs-avatar>
                </vs-avatar-group>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
    </div>
    <div style="padding-bottom:90px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>

    <!-- show drawer -->
    <a-drawer
      title="Create Tasks"
      :width="320"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-form-item label="Task name">
            <a-input
              v-decorator="[
                'taskName',
                {
                  rules: [{ required: true, message: 'Please enter task name' }],
                },
              ]"
              placeholder="Please enter task name"
            />
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Url">
            <a-input
              v-decorator="[
                'url',
                {
                  rules: [{ required: true, message: 'please enter url' }],
                },
              ]"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Members">
            <a-input
              v-decorator="[
                'owner',
                {
                  rules: [{ required: true, message: 'Please mention member' }],
                },
              ]"
              placeholder="@ mention member"
            >
            </a-input>
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Type">
            <a-input
              v-decorator="[
                'type',
                {
                  rules: [{ required: true, message: 'Please choose the type' }],
                },
              ]"
              placeholder="Please choose the type"
            >
            </a-input>
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Approver">
            <a-input
              v-decorator="[
                'approver',
                {
                  rules: [{ required: true, message: 'Please mention people' }],
                },
              ]"
              placeholder="@ mention people"
            >
            </a-input>
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="DateTime">
            <a-col :span="12">
              <a-date-picker
                v-decorator="[
                  'dateTime',
                  {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
                placeholder="Start date"
              />
            </a-col>
            <a-col :span="12">
              <a-date-picker
                v-decorator="[
                  'dateTime',
                  {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
                placeholder="End date"
              />
            </a-col>
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Description">
            <a-textarea
              v-decorator="[
                'description',
                {
                  rules: [{ required: true, message: 'Please enter url description' }],
                },
              ]"
              :rows="4"
              placeholder="Task description"
            />
          </a-form-item>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>
    <!-- end drawer -->
    <BarRouter />
  </div>
</template>

<script>
import store from '../store/index.js'
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'
import gql from 'graphql-tag'
export default {
  name: 'project',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    const projectId = parseInt(this.$route.params.id)

    return {
      project: store.state.projects.find(p => p.id === projectId),
      members: store.state.members,
      task: store.state.tasks,
      form: this.$form.createForm(this),
      visible: false,
      dataProject: null,
      dataTask: null,
      dataMemberTask: null
    }
  },
  apollo: {
    getProject: {
      query: gql`
        query($projectId: Int!) {
          project(where: { id: $projectId }) {
            id
            projectName
            projectType
            projectImage
            projectDetail
            status
            dueDate
            tasks {
              id
              taskName
              startTime
              endTime
              taskDetail
              isDone
              members {
                id
                image
              }
            }
          }
        }
      `,
      variables() {
        return {
          projectId: parseInt(this.$route.params.id),
        }
      },
      result({ data }) {
        this.dataProject = data.project
        this.dataTask = data.project.tasks
      },
    },
  },

  methods: {
    showDrawer() {
      this.visible = true
      console.log(this.visible)
    },
    onClose() {
      this.visible = false
    },
  },

  computed: {
    projectFunc() {
      return this.$store.getters.project(parseInt(this.$route.params.id))
    },
    tasksFunc() {
      return this.$store.getters.tasks
    },
  },
}
</script>

<style>
div {
  font-family: 'Roboto';
}
#imgProject {
  margin-top: 2px;
  border-radius: 100%;
  width: 20vmin;
  height: 20vmin;
  /* height: 75px; */
  object-fit: cover;
}
#imgProject::after {
  display: block;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  border-radius: 5px;
  padding: 10px 12px 10px 12px;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
}

#status {
  font-size: 10.5px;
  padding-right: 16px;
  width: 25%;
}
</style>
