<template>
  <Layout :title="title" :keyword="keywords" :description="description">
    <Header></Header>
    <div class="container">
      <div class="row" v-for="item in articleList" :key="item.id">
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
          <div class="post-preview">
              <div :href="item.url">
                  <h2 class="post-title">            
                      <a :href="item.url" target="_blank" style="font-size: 26px;">{{item.title}}</a>
                  </h2>
                  <div class="post-content-preview">{{item.summary}}</div>
              </div>
              <div class="post-meta">Posted by hubcarl on 17-09-24</div>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div style="text-align:center" v-if="isLoading">
       <img src="../../asset/images/loading.gif">
    </div>
  </Layout>
</template>
<style>
  @import "index.css";
</style>
<script type="ts" src="./index.ts"></script>

