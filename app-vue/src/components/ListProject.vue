<template>
  <div>
    <div class="listProject">
      <v-card
        id="card"
        style="text-decoration:none; color:black"
        v-for="project in projects"
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
      >
        <v-row>
          <v-col cols="8" align="left" style="padding-bottom: 0px;">
            <div class="md-title">
              <b style="line-height: 0px;">{{ project.name }}</b>
            </div>
            <div id="position">{{ project.position }}</div>
          </v-col>
          <v-col cols="4" id="status" align="right" style="padding-bottom: 0px;">
            <md-chip
              class="md-accent"
              md-clickable
              v-if="project.status == 'WIP'"
              style="background-color:#F77B72; color:black; font-size: 11px; width:60.27px; text-align:center; font-weight:500;"
            >
              <span
                id="iconStatus"
                class="iconify"
                data-inline="false"
                data-icon="carbon:warning"
              ></span>
              {{ project.status }}
            </md-chip>
            <md-chip
              v-if="project.status == 'Done'"
              style="background-color:#4DD987; color:black; font-size: 11px; font-weight:500;"
            >
              <span
                id="iconStatus"
                class="iconify"
                data-inline="false"
                data-icon="octicon:check-circle-24"
              ></span>
              {{ project.status }}
            </md-chip>
          </v-col>
        </v-row>
        <v-row style="padding-top: 0px;">
          <v-col>
            <div align="left">{{ project.description }}</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col style="padding-top: 0px;">
            <div style="float:right">
              <vs-avatar-group float max="4">
                <vs-avatar
                  v-for="member in members"
                  :key="member.id"
                  style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
                >
                  <img v-bind:src="member.image" />
                </vs-avatar>
              </vs-avatar-group>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div style="padding-bottom:60px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
export default {
  name: 'ListProject',
  data() {
    return {
      projects: store.state.projects,
      members: store.state.members,
    }
  },

  methods: {},
}
</script>

<style scoped>
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 2px;
  font-family: 'Roboto';
}
#title {
  padding-bottom: 0px;
  font-size: 16px;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#status {
  font-size: 10.5px;
  width: 25%;
}
#iconStatus {
  font-size: 10px;
  vertical-align: -4.57%;
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  padding-bottom: 10px;
  border-radius: 5px;
}
.md-title {
  font-size: 16px;
  margin-bottom: -1px; /* ระยะห่างระหว่างชื่อโปรเจคกับตำแหน่งงาน */
  line-height: 20px; /* ระยะห่างระหว่างบรรทัดของชื่อโปรเจค เวลาขึ้นบรรทัดใหม่ */
}

.row {
  margin-left: 5px;
  margin-right: 5px;
}

.col {
  padding-bottom: 5px;
}
</style>
