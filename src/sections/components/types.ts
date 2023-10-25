export type IUserProfileCover = {
  name: string;
  role: string;
  coverUrl: string;
  avatarUrl: string;
};
export type NavItemProps = {
  value: string,
  label: string,
  icon:any,
};
export type NavProps = {
  data: NavItemProps[];
};