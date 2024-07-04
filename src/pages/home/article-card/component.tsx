import articleImg1 from '@/assets/article-01.png';
import articleImg2 from '@/assets/article-02.png';
import { Card, Image, Popover } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './component.less';

interface ArticleInfo {
  title: string;
  subtext: string;
  date: string;
  img?: string;
}

const ArticleInfos: Array<ArticleInfo> = [
  {
    title: '前端环境',
    subtext:
      'nodejs安装及环境配置，基本的Node.js安装流程相对直接，而环境配置部分则视个人需求有所不同，主要涉及全局模块路径和环境变量的设置。对于初学者而言，通常只需要确保Node.js被正确安装且其可执行文件路径被添加到了系统的PATH中即可。<br/>下面我们便来简单讨论如何实现让长方形图片显示出正方形的效果，首先我们本次讨论中用到的两张图片的原图就是上面的两张图片（一张宽度大于高度，另一张高度大于宽度）',
    date: '2024-07-03',
  },
  {
    title: 'React入门——01:什么是TSX?',
    subtext:
      '欢迎加入本专栏！本专栏将引领您快速上手React，让我们一起放弃放弃的念头，开始学习之旅吧！我们将从搭建React项目开始，逐步深入讲解最核心的hooks，以及React路由、请求、组件封装以及UI（Ant Design）框架的使用。让我们一起掌握React，开启前端开发的全新篇章！',
    date: '2024-07-03',
    img: articleImg1,
  },
  {
    title: 'Angular入门',
    subtext:
      '当你用 Angular 搭建一个应用，你正在利用一个可以从单开发人员项目扩展到企业级应用程序的平台。Angular 被设计用来使版本迭代尽可能简单。因此，你可以毫不费力地利用最新成果（developments）。最为重要的是，Angular 的生态系统由多达 170 万的开发人员、库（library）作者和内容创作者构成的多元化群体组成',
    date: '2024-07-04',
    img: articleImg2,
  },
];

export default function ArticleCard() {
  const titleRef = useRef<Array<HTMLParagraphElement>>([]);
  const [popOverKey, setPopOverKey] = useState('');

  useEffect(() => {
    // 使用key强制更新popover组件
    setPopOverKey('popover');
  }, []);

  const isShowPopOver = (hasImg: boolean, index: number): boolean => {
    const width = titleRef.current[index]?.offsetWidth ?? 0;
    const noImgMaxWidth = 449;
    const hasImgMaxWidth = 249;
    const maxWidth = hasImg ? hasImgMaxWidth : noImgMaxWidth;
    return width > maxWidth;
  };

  return (
    <div className={styles['card-content']}>
      {ArticleInfos.map((item, index) => {
        return (
          <Card className={styles.card} key={index} hoverable>
            {item.img ? <Image src={item.img} /> : null}
            <div
              className={`${styles['text-content']} ${
                item.img ? '' : styles['no-img']
              }`}
            >
              <div className={styles['title-date']}>
                <Popover
                  content={isShowPopOver(!!item.img, index) ? item.title : null}
                  key={`${popOverKey}_${index}`}
                >
                  <p
                    ref={(el) =>
                      (titleRef.current[index] = el as HTMLParagraphElement)
                    }
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                </Popover>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div className={styles.line}></div>
              <span
                className={styles.subtext}
                dangerouslySetInnerHTML={{ __html: item.subtext }}
              ></span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
