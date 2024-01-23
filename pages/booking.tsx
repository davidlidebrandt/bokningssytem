import React from "react";
import { Select } from "antd";

const onChange = (value: string) => {
	console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
	console.log("search:", value);
};

const filterOption = (
	input: string,
	option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function booking() {
	return (
		<main className="light-bg py-16 px-6">
			<section className="light-blue-bg py-12 dark-blue-c max-w-5xl m-auto">
				<h2 className="dark-blue-c text-center mb-8 font-bold">
					Book now
				</h2>
				<form className="text-center">
					<div>
					<label
						className="block mt-8 text-sm"
						htmlFor="search"
					>
						Search for companies
					</label>
					<Select
						showSearch
						placeholder=" "
						style={{ width: 200 }}
						optionFilterProp="children"
						onChange={onChange}
						onSearch={onSearch}
						filterOption={filterOption}
						options={[
							{
								value: "jack",
								label: "Jack",
							},
							{
								value: "lucy",
								label: "Lucy",
							},
							{
								value: "tom",
								label: "Tom",
							},
						]}
					/>
					</div>
					<label
						className="block mt-8 text-sm"
						htmlFor="browse"
					>
						Browse registered companies
					</label>
					<div>
						<Select
							defaultValue=" "
							style={{ width: 200 }}
							options={[
								{ value: "jack", label: "Jack" },
								{ value: "lucy", label: "Lucy" },
								{ value: "Yiminghe", label: "yiminghe" },
							]}
						/>
					</div>
				</form>
			</section>
		</main>
	);
}
