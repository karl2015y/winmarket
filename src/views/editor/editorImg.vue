<template>
  <div v-if="mvalue">
    <el-image
      :src="mvalue"
      fit="contain"
      :style="{
        width: option.autoCropWidth + 'px',
        height: option.autoCropHeight + 'px',
      }"
    ></el-image>
    <br />
    <el-button @click="deleteImageHandler()" type="danger">刪除圖片</el-button>
  </div>
  <el-upload
    v-else
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="true"
    :on-change="handleCrop"
    :before-upload="beforeAvatarUpload"
    :show-file-list="false"
    :thumbnail-mode="true"
    accept="image/*"
  >
    <div class="upload-box">
      <el-button type="primary" class="select-btn">選擇圖片</el-button>
    </div>
  </el-upload>

  <el-dialog
    title="圖片剪裁"
    :close-on-click-modal="false"
    :fullscreen="true"
    v-model="showCropper"
    center
  >
    <div
      class="flex flex-wrap"
      :style="{
        width: Number(option.autoCropWidth) + 100 + 'px',
        height: Number(option.autoCropHeight) + 100 + 'px',
      }"
    >
      <div class="cropper-box m-auto w-full h-full">
        <vue-cropper
          ref="cropperRef"
          :img="option.img"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="option.info"
          :full="option.full"
          :canScale="option.canScale"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :fixed="option.fixed"
          :fixed-box="option.fixedBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          :high="option.high"
          :info-true="option.infoTrue"
          :max-img-size="option.maxImageSize"
          :enlarge="option.enlarge"
          :mode="option.mode"
          @realTime="preview"
        />
      </div>
      <div class="">
        <!-- <div class="preview-title">
          <span>预览</span>
          <span class="preveiw-upload">重新上传</span>
        </div>
        <input
          ref="upload"
          type="file"
          style="position: absolute; clip: rect(0 0 0 0)"
          accept="image/png, image/jpeg, image/jpg"
        /> -->

        <div
          class="border-solid border"
          :style="{
            width: option.autoCropWidth + 'px',
            height: option.autoCropHeight + 'px',
          }"
        >
          <img
            class="w-full h-full object-cover"
            v-if="modelSrc"
            :src="modelSrc"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button @click="uploadImage()" type="primary">確定上傳</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { ref, watch, nextTick } from "vue";
import { ElMessage } from "element-plus";
import "vue-cropper/dist/index.css";
import { VueCropper } from "vue-cropper";
import { uploadFile, deleteFile } from "@/db.js";

export default {
  components: { VueCropper },
  props: ["modelValue", "option", "updateDataHandler"],
  setup(props, content) {
    //   雙向value
    const mvalue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (val) => {
        mvalue.value = val;
      }
    );
    watch(mvalue, (val) => {
      content.emit("update:modelValue", val);
    });

    const option = ref({
      img: "", // 裁剪图片的地址
      outputSize: 1, // 裁剪生成图片的质量
      outputType: "png", // 裁剪生成图片的格式
      full: false, // 是否输出原图比例的截图
      info: true, // 图片大小信息
      canScale: true, // 图片是否允许滚轮缩放
      autoCrop: true, // 是否默认生成截图框
      autoCropWidth:
        props.option.length > 0 ? props.option.split("x")[0] : 1920, // 默认生成截图框宽度
      autoCropHeight:
        props.option.length > 0 ? props.option.split("x")[1] : 1080, // 默认生成截图框高度
      canMove: true, // 上传图片是否可以移动
      fixedBox: false, // 固定截图框大小 不允许改变
      fixed: false, // 是否开启截图框宽高固定比例
      canMoveBox: true, // 截图框能否拖动
      original: false, // 上传图片按照原始比例渲染
      centerBox: false, // 截图框是否被限制在图片里面
      infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      enlarge: 1, // 图片根据截图框输出比例倍数
      mode: "container", // 图片默认渲染方式
      filename: "",
    });

    // 處理剪裁
    const showCropper = ref(false);
    const handleCrop = (file) => {
      console.log("handleCrop", 1);
      nextTick(() => {
        console.log("handleCrop", 2);
        if (canCropper.value) {
          console.log("handleCrop", 3);
          option.value.img = window.URL.createObjectURL(file.raw); // 将图片转化为路径
          showCropper.value = canCropper.value;
        }
      });
    };

    // 圖片上傳驗證
    const canCropper = ref(false);
    const beforeAvatarUpload = (file) => {
      option.value.filename = file.name;
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        ElMessage.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        ElMessage.error("上传头像图片大小不能超过 2 MB!");
      }
      canCropper.value = isJPG && isLt2M;
      canCropper.value = true;
      return false;
    };
    // 預覽
    const cropperRef = ref(null);

    const modelSrc = ref("");
    const preview = () => {
      cropperRef.value.getCropData((data) => {
        // console.log(data);
        modelSrc.value = data;
      });
    };

    // 上傳
    const uploadImageUrl = ref("");
    const uploadImage = () => {
      cropperRef.value.getCropBlob((blob) => {
        // do something
        // uploadImageUrl.value = `https://dummyimage.com/1204x504`;
        // mvalue.value = uploadImageUrl.value;
        uploadFile(blob).then((downloadURL) => {
          uploadImageUrl.value = downloadURL;
          mvalue.value = downloadURL;
          setTimeout(() => {
            props.updateDataHandler();
          }, 500);
        });

        showCropper.value = false;

        // showCropper.value = false;
      });
    };
    // 取消上傳
    const cancel = () => {
      showCropper.value = false;
      uploadImageUrl.value = "";
      mvalue.value = "";
    };

    // 刪除檔案
    const deleteImageHandler = () => {
      deleteFile(`${mvalue.value}`).then((res) => {
        if (!res) {
          alert("刪除錯誤，請聯絡工程師QQ或等一下再試試看");
        }
        mvalue.value = "";
        setTimeout(() => {
          props.updateDataHandler();
        }, 500);
      });
    };

    return {
      mvalue,
      handleCrop,
      option,
      showCropper,
      beforeAvatarUpload,
      modelSrc,
      preview,
      cropperRef,
      uploadImage,
      uploadImageUrl,
      cancel,
      deleteImageHandler,
    };
  },
};
</script>
<style scoped>
</style>