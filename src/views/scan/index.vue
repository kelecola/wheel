<template>
  <div class="info_wrapper">
    <div id="reader"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue'
// import Qrcode from './QrcodeReader.vue'
import { useRouter } from "vue-router";
// import { apiScan } from './request'
import { Html5Qrcode } from 'html5-qrcode';
import { debounce } from 'lodash';

export default defineComponent({
  name: 'Info',
  props: {},
  
  setup() {
    const detail = reactive<any>({});

    let cameraId = ref('');
    let devicesInfo = ref<any>('');
    let html5QrCode = ref<any>(null);

    const router = useRouter();

    
    const getCameras = () => {
      Html5Qrcode.getCameras()
        .then((devices: any[]) => {
          console.log('摄像头信息', devices);
          if (devices && devices.length) {
            // 如果有2个摄像头，1为前置的
            if (devices.length > 1) {
              cameraId.value = devices[1].id;
            } else {
              cameraId.value = devices[0].id;
            }
            devicesInfo.value = devices;
            // start开始扫描
            start();
          }
        })
        .catch((err) => {
          // handle err
          console.log('获取设备信息失败', err); // 获取设备信息失败
        });
    };

    const start = () => {
      html5QrCode = new Html5Qrcode('reader');
      html5QrCode
        .start(
          cameraId.value, // retreived in the previous step.
          {
            fps: 10, // 设置每秒多少帧
            qrbox: { width: 250, height: 250 }, // 设置取景范围
            // scannable, rest shaded.
          },
          (decodedText: string, decodedResult: any) => {
            // do something when code is read. For example:
            // if (qrCodeMessage) {
            //   getCode(qrCodeMessage);
            //   stop();
            // }
            console.log('扫描的结果', decodedText, decodedResult);
            if (decodedText) {
              debounce(() => {window.location.href = decodedText}, 500)()
              // `https://pzh6.com/?code=${decodedText}`
            }
          },
          (errorMessage: any) => {
            // parse error, ideally ignore it. For example:
            // console.log(`QR Code no longer in front of camera.`);
            console.log('暂无额扫描结果', errorMessage);
          }
        )
        .catch((err: any) => {
          // Start failed, handle it. For example,
          console.log(`Unable to start scanning, error: ${err}`);
        });


      const stop = () => {
        html5QrCode
          .stop()
          .then((ignore: any) => {
            // QR Code scanning is stopped.
            console.log('QR Code scanning stopped.', ignore);
          })
          .catch((err: any) => {
            // Stop failed, handle it.
            console.log('Unable to stop scanning.', err);
          });
      }
    };

    onMounted(() => {
      getCameras()
      // curApiScan()
    });

    onUnmounted(() => {
      stop();
    });


    return {
      detail,
      getCameras,
      start,
      stop,
    };
  },
  
})
</script>

<style lang="scss" scoped>
.info_wrapper {
  position: relative;
	height: 100%;
	width: 100%;
  background: rgba($color: #000000, $alpha: 0.48);
  #reader {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
</style>
