import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
	const [CEP, setCEP] = useState(""),
		cepValido = useMemo(() => {
			return ValidationService.cep(CEP);
		}, [CEP]),
		[erro, setErro] = useState(""),
		[buscaFeita, setBuscaFeita] = useState(false),
		[carregando, setCarregando] = useState(false),
		[diaristas, setDiaristas] = useState([] as UserShortInterface[]),
		[diaristasRestantes, setDiaristasRestantes] = useState(0);

	return {
		CEP,
		setCEP,
		cepValido,
	};
}
