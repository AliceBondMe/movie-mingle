export const createPagesButtons = (pages, currentPage) => {
  if (pages < 5) {
    let arr = [];
    for (let i = 1; i <= pages; i += 1) {
      arr = [...arr, i];
    }
    return arr;
  }

  if (pages >= 5) {
    let arr = [
      ...new Set(
        [1, currentPage - 1, currentPage, currentPage + 1, pages].filter(
          i => i > 0 && i <= pages
        )
      ),
    ];
    return arr;
  }
};
