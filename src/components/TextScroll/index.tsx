import React, { useRef, useLayoutEffect } from "react";

interface TextScrollProps {
  /**
   * 内容
   */
  content: string;
  /**
   * 滚动速度 (fps/s)
   */
  speed: number;
}

let timer: number = 0;
function TextScroll(props: TextScrollProps) {
  const { content, speed } = props;
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const elWidth = useRef({
    wrap: 0,
    content: 0,
  });

  const getOffsetX = () => {
    let ret: number | string = 0;
    try {
      const { transform } = contentRef?.current?.style;
      const currentPos = transform.match(/\-?[0-9\.]+/);
      if (transform && currentPos) {
        ret = currentPos[0];
      }
    } catch (e) {}
    return ret;
  };

  const setOffsetX = (num: string | number) => {
    try {
      contentRef.current.style.transform = `translateX(${num}px)`;
    } catch (e) {}
  };

  const clearAnimationFrame = () => {
    window.cancelAnimationFrame(timer);
  };

  const move = (endPos: number | string) => {
    const c = getOffsetX();

    // 当移动到最左边后 把位置改到右边去 开启新一轮的循环
    if (c < endPos) {
      clearAnimationFrame();
      setOffsetX(elWidth.current.wrap);
      move(endPos);
      return;
    }
    setOffsetX(Number(c) - speed);
    timer = window.requestAnimationFrame(() => {
      move(endPos);
    });
  };

  const startMove = (endPos: number) => {
    timer = window.requestAnimationFrame(() => {
      move(endPos);
    });
  };

  useLayoutEffect(() => {
    elWidth.current = {
      wrap: wrapRef.current!.offsetWidth,
      content: contentRef.current!.offsetWidth,
    };

    startMove(-elWidth.current.content);

    return () => {
      clearAnimationFrame();
    };
  }, []);

  return (
    <div className="marquee_box" ref={wrapRef}>
      <p ref={contentRef}>{content}</p>
    </div>
  );
}
TextScroll.defaultProps = {
  content: "",
  speed: 1,
};

export default React.memo(TextScroll);
