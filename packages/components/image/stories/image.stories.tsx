import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {image} from "@nextui-org/theme";

import {Image, ImageProps} from "../src";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    radius: {
      control: {
        type: "select",
        options: ["none", "base", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      },
    },
    shadow: {
      control: {
        type: "select",
        options: ["none", "base", "sm", "md", "lg", "xl", "2xl", "3xl", "inner"],
      },
    },
    isBlurred: {
      control: {
        type: "boolean",
      },
    },
    isZoomed: {
      control: {
        type: "boolean",
      },
    },
    showSkeleton: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Image>;

const defaultProps = {
  ...image.defaultVariants,
  src: require("./assets/local-image-1.jpeg"),
  alt: "NextUI hero image",
  disableSkeleton: true,
};

const Template: ComponentStory<typeof Image> = (args: ImageProps) => <Image {...args} />;

const LoadingTemplate: ComponentStory<typeof Image> = (args: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const time = !args.disableSkeleton ? 2500 : 500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Image {...args} isLoading={isLoading} />;
};

export const Default = Template.bind({});
Default.args = {
  width: 300,
  ...defaultProps,
};

export const Blurred = Template.bind({});
Blurred.args = {
  ...defaultProps,
  width: 300,
  isBlurred: true,
  src: require("./assets/local-image-small.jpg"),
};

export const Zoomed = Template.bind({});
Zoomed.args = {
  ...defaultProps,
  width: 300,
  isZoomed: true,
  radius: "xl",
  src: "https://nextui.org/images/card-example-2.jpeg",
};

export const Shadow = Template.bind({});
Shadow.args = {
  ...defaultProps,
  width: 300,
  isZoomed: true,
  radius: "xl",
  shadow: "xl",
  src: require("./assets/local-image-small.jpg"),
};

export const AnimatedLoad = Template.bind({});
AnimatedLoad.args = {
  ...defaultProps,
  width: 300,
  radius: "xl",
  src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
};

export const Fallback = LoadingTemplate.bind({});
Fallback.args = {
  ...defaultProps,
  width: 300,
  radius: "xl",
  src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  fallbackSrc: "https://via.placeholder.com/300x450",
};

export const Skeleton = LoadingTemplate.bind({});
Skeleton.args = {
  ...defaultProps,
  width: 300,
  radius: "xl",
  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  disableSkeleton: false,
};
