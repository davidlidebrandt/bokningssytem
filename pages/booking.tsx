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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { token } = theme.useToken();

	const wrapperStyle: React.CSSProperties = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
		console.log(value.format('YYYY-MM-DD'), mode);
	  };
	return (
		<main className="light-bg py-16 px-6">
			<section className="light-blue-bg py-12 dark-blue-c max-w-5xl m-auto">
				<Button type="primary" onClick={showModal}>
					Open Modal
				</Button>
				<Modal
					className="grid place-items-center dark-blue-bg p-0"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					okText="Continue"
				>
					<h3 className="w-full text-center dark-blue-bg m-0">Company name</h3>
					<div style={wrapperStyle} className="m-6">
						<Calendar
							fullscreen={false}
							onPanelChange={onPanelChange}
						/>
					</div>
				</Modal>

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
