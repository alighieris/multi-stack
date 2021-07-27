import React from "react";

import { ScrollView } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle";
import TextInput from "ui/components/inputs/textInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/inputs/button/Button";
import UserInformation from "ui/components/data-display/userInformation/UserInformation";
import {
	FormContainer,
	TextContainer,
	ErrorText,
	ResponseContainer,
} from "@styles/pages/encontrar-diarista.styled";
import useIndex from "data/hooks/pages/useIndex.page";
const EncontrarDiaristas: React.FC = () => {
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
		<ScrollView>
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profissionais da sua localidade"
				}
			/>
			<FormContainer>
				<TextInputMask
					value={CEP}
					onChangeText={setCEP}
					type={"custom"}
					options={{
						mask: "99.999-999",
					}}
					customTextInput={TextInput}
					customTextInputProps={{ label: "Digite seu CEP" }}
				/>
				{erro ? <ErrorText>Cep não encontrado</ErrorText> : null}
				<Button
					mode={"contained"}
					style={{ marginTop: 32 }}
					color={"#02E7D9"}
					disabled={!cepValido || carregando}
					onPress={() => buscarProfissionais(CEP)}
					loading={carregando}
				>
					Buscar
				</Button>
			</FormContainer>

			{buscaFeita &&
				(diaristas.length > 0 ? (
					<ResponseContainer>
						{diaristas.map((item, index) => (
							<UserInformation
								name={item.nome_completo}
								rating={item.reputacao || 0}
								picture={item.foto_usuario || ""}
								description={item.cidade}
								darker={index % 2 === 1}
							/>
						))}

						{diaristasRestantes > 0 && (
							<TextContainer>
								... e mais {diaristasRestantes}
								{diaristasRestantes > 1
									? " profissionais atendem "
									: " profissional atende "}
								ao seu endereço.
							</TextContainer>
						)}
						<Button color={"#02E7D9"} mode={"contained"}>
							Contratar um profissional
						</Button>
					</ResponseContainer>
				) : (
					<TextContainer>
						Ainda não temos nenhuma diarista disponível em sua
						região.
					</TextContainer>
				))}
		</ScrollView>
	);
};

export default EncontrarDiaristas;
