import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import Cards from "./Cards";

const Lists = ({ list, search }) => {
  const [page, setPages] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let index = list?.findIndex(
      (fi) => Number(fi["page-num-requested"]) === page
    );
    if (index !== -1) {
      setItems(list[index]["content-items"]?.content);
    }
  }, [list]);

  const fetchMoreData = () => {
    setPages((prev) => prev + 1);
    let index = list?.findIndex((fi) => fi["page-num-requested"] == page + 1);
    if (index !== -1) {
      setItems(items.concat(list[index]["content-items"]?.content));
    }
  };
  return (
    <InfiniteScroll
      dataLength={items?.length}
      next={fetchMoreData}
      hasMore={true}
      loader={""}
    >
      <div className="flex flex-wrap justify-between px-5 bg-black pt-5">
        {items
          ?.filter((fl) => {
            if (search !== "") {
              return fl?.name?.includes(search);
            } else return fl;
          })
          ?.map((item, index) => (
            <Cards key={index} data={item} />
          ))}
      </div>
    </InfiniteScroll>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default React.memo(connect(mapStateToProps)(Lists));
