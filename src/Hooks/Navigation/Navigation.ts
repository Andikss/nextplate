import { useRouter } from "next/navigation";

type NavigateOptions = {
  replace?: boolean;
  scroll?: boolean;
};

export const useNavigation = () => {
  const router = useRouter();
  
  return {
    navigate: (url: string, options: NavigateOptions = { replace: false, scroll: true }) => {
      if (options.replace) {
        router.replace(url);
      } else {
        router.push(url, { scroll: options.scroll });
      }
    },
    goBack: () => router.back(),
    refresh: () => router.refresh()
  };
};
