export const fetchData = async () => {
    try {
      const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product", {
        next: { revalidate: 10}
      });
      const data = await res.json();
      return data.content;
    } catch (error) {
      console.log(error);
    } 
};

export const fetchDetail = async (id: string) => {
  try {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`);
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (key: string) => {
  try {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${key}`);
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
  
};