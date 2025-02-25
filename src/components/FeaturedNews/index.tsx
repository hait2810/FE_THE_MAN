import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../redux/slices/postSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./FeaturedNews.module.css";
type Props = {};
const FeaturedNews = () => {
  const post = useSelector((state: RootState) => state?.post);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPosts({
        page: 1,
        limit: 4,
      })
    );
  }, [dispatch, 1]);
  return (
    <section className={styles.news}>
      <div className={styles.news__title}>
        <h2>Tin tức nổi bật</h2>
      </div>
      <div className={styles.news__item}>
        {post?.posts.Post?.map((item:any, index:number) => {
          return (
            <div key={index+1}>
            <Link to={`/detail/${item._id}/post`}>
              <div
                className="block bg-cover bg-center pt-[70%] rounded-t-xl relative"
                style={{
                  backgroundImage:
                    `url(${item.image})`
                }}
              >
                <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="newspaper"
                    className="svg-inline--fa fa-newspaper "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <div className="bg-white rounded-b-xl shadow px-3 py-2">
              <p className="text-sm text-gray-500">{moment(item.createdAt).format("DD [tháng] MM, YYYY")}</p>
              <h3>
                <Link to={`/detail/${item._id}/post`}>
                  <span className="limit-line-2 h-4 overflow-hidden block my-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">
                    {item.title}
                  </span>
                </Link>
              </h3>
              <div className="limit-line-3 text-gray-500 text-sm text-justify h-10 overflow-hidden">
               {item.descShort}
              </div>
              <button className="bg-gray-500 w-24 h-7 mb-5 text-base mt-4 rounded-full text-stone-50 hover:bg-slate-300 hover:text-slate-700 "> <Link to={`/detail/${item._id}/post`}> Xem thêm</Link> </button>
            </div>
          </div>)
        })}
           
      </div>
    </section>
  );
};

export default FeaturedNews;
