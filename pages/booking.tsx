import React, { useState } from "react";
import { Button, Modal, Select, Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from 'dayjs';

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
	const [isModalOpen, setIsModalOpen] = useState("hidden");
	const { token } = theme.useToken();

	const wrapperStyle: React.CSSProperties = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};

	const showModal = () => {
		setIsModalOpen("");
	};

	const handleCloseModal = () => {
		setIsModalOpen("hidden");
	};


	const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
		console.log(value.format('YYYY-MM-DD'), mode);
	  };

	
	return (
		<main className="light-bg py-16 px-6">
			<section className="light-blue-bg py-12 dark-blue-c max-w-5xl m-auto z-0">
				<Button type="primary" onClick={showModal}>
					Open Modal
				</Button>
				
				<div
					className={`${isModalOpen} absolute grid place-items-center dark-blue-bg p-6 z-50}`}
					
				>
					<h3 className="w-full text-center light-c m-0 mt-6">Company name</h3>
					<div style={wrapperStyle} className="m-6">
						<Calendar
							fullscreen={false}
							onPanelChange={onPanelChange}
						/>
					</div>
				</div>

				<h2 className="dark-blue-c text-center mb-8 font-bold">
					Book now
				</h2>
				<form className="text-center">
					<div>
						<label className="block mt-8 text-sm" htmlFor="search">
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
					<label className="block mt-8 text-sm" htmlFor="browse">
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
