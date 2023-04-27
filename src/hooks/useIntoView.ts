import { onMounted, ref } from "vue";

type IntoViewOptions = {
  /** 容器元素ID */
  containerId: string;
  /** 被监听元素ID */
  targetId: string;
  /** 是否只在第一次进入触发 */
  emitOnce?: boolean;
};

const useIntoView = (options: IntoViewOptions, callback: Function) => {
  const isFirstIntoView = ref<boolean>(true);
  onMounted(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        if (options.emitOnce && !isFirstIntoView.value) return;
        callback();
        isFirstIntoView.value = false;
      }
    };
    const observerOptions: IntersectionObserverInit = {
      root: document.querySelector(options.containerId) as Element,
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(document.querySelector(options.targetId) as Element);
  });
};

export default useIntoView;
