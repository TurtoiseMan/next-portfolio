"use client";
type TechTagProps = {
	techstack: string[];
  };

export const TechTag: React.FC<TechTagProps> = ({ techstack }) => {
	return (
		<div className="flex flex-wrap items-center gap-2 mt-6 ">
		{techstack.map((tech, index) => (
		<span
			key={index}
			className="px-2.5 py-[2px] border rounded-xl text-[#d4d4d8] border-[#4a4a4a]"
		>
			{tech}
		</span>
		))}
	</div>
	);
}