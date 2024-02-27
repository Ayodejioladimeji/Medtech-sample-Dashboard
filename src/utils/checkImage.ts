export const checkImage = (file) => {
  let err = "";

  if (!file) return (err = "File does not exists");

  if (file.size > 1024 * 1024) err = "Supported file size is 1mb";

  if (file.type !== "image/jpeg" && file.type !== "image/png")
    err = "File format not supported";

  return err;
};
