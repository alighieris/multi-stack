import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/safeenvironment/SafeEnvironment";
import PageTitle from "ui/components/data_display/pagetitle/PageTitle";
import UserInfo from "ui/components/data_display/userinfo/UserInfo";
import TextFieldMask from "ui/components/inputs/textfieldmask/TextFieldMask";
import {
	Button,
	Typography,
	Container,
	CircularProgress,
} from "@material-ui/core";
import {
	FormElementsContainer,
	ProfessionalsPaper,
	ProfessionalsContainer,
} from "ui/styles/pages/index.style";

import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
	const {
		CEP,
		setCEP,
		cepValido,
		buscarProfissionais,
		erro,
		diaristas,
		buscaFeita,
		carregando,
		diaristasRestantes,
	} = useIndex();

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
					{erro && <Typography color={"error"}>{erro}</Typography>}
					<Button
						variant={"contained"}
						color={"secondary"}
						sx={{ width: "220px" }}
						disabled={!cepValido || carregando}
						onClick={() => buscarProfissionais(CEP)}
					>
						{carregando ? <CircularProgress size={20} /> : "Buscar"}
					</Button>
				</FormElementsContainer>

				{buscaFeita &&
					(diaristas.length > 0 ? (
						<ProfessionalsPaper>
							<ProfessionalsContainer>
								{diaristas.map((item, index) => {
									return (
										<UserInfo
											key={index}
											name={item.nome_completo}
											picture={item.foto_usuario}
											rating={item.reputacao}
											description={item.cidade}
										/>
									);
								})}
							</ProfessionalsContainer>
							<Container sx={{ textAlign: "center" }}>
								{diaristasRestantes > 0 && (
									<Typography sx={{ mt: 5 }}>
										... e mais {diaristasRestantes}{" "}
										{diaristasRestantes > 1
											? "profissionais atendem"
											: "profissional atende"}{" "}
										na sua área.
									</Typography>
								)}
								<Button
									variant={"contained"}
									color={"secondary"}
									sx={{ mt: 5 }}
								>Contratar</Button>
							</Container>
						</ProfessionalsPaper>
					) : (
						<Typography align={"center"} color={"textPrimary"}>
							Ainda não há nenhuma diarista cadastrada na sua
							região.
						</Typography>
					))}
			</Container>
		</div>
	);
}
