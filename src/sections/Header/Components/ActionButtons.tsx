import { RemixButton } from "@/sections/Header/components/RemixButton";

export const ActionButtons = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-3">
      <a
        href="https://www.figma.com/report-abuse?reported_content=glass-peach-21958109.figma.site"
        title="Report"
        aria-label="Report"
        className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)] border border-neutral-200 p-1 rounded-[5px] border-solid"
      >
        <img
          src="https://c.animaapp.com/mfusfki5CQMgBt/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
        />
      </a>
      <RemixButton />
    </div>
  );
};