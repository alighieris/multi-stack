import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/safeenvironment/SafeEnvironment";
import PageTitle from "ui/components/data_display/pagetitle/PageTitle";
import UserInfo from "ui/components/data_display/userinfo/UserInfo";
import TextFieldMask from "ui/components/inputs/textfieldmask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
	FormElementsContainer,
	ProfessionalsPaper,
	ProfessionalsContainer,
} from "ui/styles/pages/index.style";

import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
	const { CEP, setCEP, cepValido } = useIndex();

	return (
		<div>
			<SafeEnvironment />
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profissionais da sua área."
				}
			></PageTitle>
			<Container>
				<FormElementsContainer>
					<TextFieldMask
						mask={"99.999-999"}
						label={"Digite seu CEP..."}
						variant={"outlined"}
						fullWidth
						value={CEP}
						onChange={(event) => setCEP(event.target.value)}
					/>
					<Typography color={"error"}>CEP inválido</Typography>
					<Button
						variant={"contained"}
						color={"secondary"}
						sx={{ width: "220px" }}
					>
						Buscar
					</Button>
				</FormElementsContainer>
				<ProfessionalsPaper>
					<ProfessionalsContainer>
						<UserInfo
							name={"Alighieris"}
							picture={"https://github.com/alighieris.png"}
							rating={3}
							description={"Bom Jardim City"}
						/>
						<UserInfo
							name={"Menino Wesley"}
							picture={"https://github.com/wesleymarques0113.png"}
							rating={3}
							description={"Cosme e Damião"}
						/>
						<UserInfo
							name={"Alighieris"}
							picture={"https://github.com/alighieris.png"}
							rating={3}
							description={"Bom Jardim City"}
						/>
						<UserInfo
							name={"Alighieris"}
							picture={"https://github.com/alighieris.png"}
							rating={3}
							description={"Bom Jardim City"}
						/>
					</ProfessionalsContainer>
				</ProfessionalsPaper>
			</Container>
		</div>
	);
}
