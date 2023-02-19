exports.localeData = {
	"en": {
		"status.success": "SUCCESS",
		"status.failure": "FAILURE",
		"csv.failed-to-write-file": "Internal OED error: Failed to write the file: {filename}",
		"csv.missing-dst-crossing-date": "Could not find DST crossing date in pipeline so giving up.",
		"csv.invalid-gps-input": "For meter {meter} the gps coordinates of {gps} are invalid",
		"csv.invalid-unit-id": "For meter {meter} the unit of {unit} is invalid",
		"csv.invalid-graphic-unit": "For meter {meter} the default graphic unit of {graphic_unit} is invalid",
		"csv.require-single-meter": "Meter name provided (\"{meter}\") in request with update for meters but more than one meter in CSV so not processing",
		"csv.non-existent-meter-name": "Meter name of \"{meter}\" does not seem to exist with update for meters and got DB error of: {errorMessage}",
		"csv.duplicate-meter": "Meter name of \"{meter}\" got database error of: {errorMessage}",
		"csv.failed-meter-upload": "Failed to upload meters due to internal OED Error: {errorMessage}",
		"csv.mismatched-cumulative-variables": "On meter {meter} in pipeline: cumulative was false but cumulative reset was true. To avoid mistakes all reading are rejected.",
		"csv.failed-to-parse-start-datetime": "The start date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.failed-to-parse-end-datetime": "The end date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.invalid-date": "For meter {meter}: Error parsing Reading #{num} The start ({start}) and/or end time ({end}) provided did not parse into a valid date/time so all reading are rejected.",
		"csv.invalid-reading-number": "For meter {meterName}: Error parsing Reading #{num} with cumulative data. The reading value provided of {reading} is not considered a number so all reading are rejected.",
		"csv.error-uploading":  "A csv file must be submitted via the csvfile parameter.",
		"csv.verified-user":"Invalid credentials",
		"csv.insert-readings-success":"It looks like the insert of the readings was a success.",
		"csv.warning-during-readings-process":"However, note that the processing of the readings returned these warning(s): ",
		"csv.insert-readings-failed":"It looks like the insert of the readings had issues with some or all of the readings where the processing of the readings returned these warning(s)/error(s): ",
		"csv.invalid-token":"Invalid token (either unauthorized or logged out)",
		"csv.create-meter-false":"User Error: Meter with name '{meter}' not found. createMeter needs to be set true in order to automatically create meter."
	},
	"fr": {
		"status.success": "SUCCÈS",
		"status.failure": "ÉCHEC",
		"csv.failed-to-write-file": "Erreur interne OED: Impossible d'écrire le fichier: {filename}",
		"csv.missing-dst-crossing-date": "Impossible de trouver la date de passage à l'heure d'été dans le pipeline, donc abandonner.",
		"csv.invalid-gps-input": "(Need French) For meter {meter} the gps coordinates of {gps} are invalid",
		"csv.invalid-unit-id": "(Need French) For meter {meter} the unit of {unit} is invalid",
		"csv.invalid-graphic-unit": "(Need French) For meter {meter} the default graphic unit of {graphic_unit} is invalid",
		"csv.require-single-meter": "(Need French) Meter name provided (\"{meter}\") in request with update for meters but more than one meter in CSV so not processing",
		"csv.non-existent-meter-name": "(Need French) Meter name of \"{meter}\" does not seem to exist with update for meters and got DB error of: {errorMessage}",
		"csv.duplicate-meter": "(Need French) Meter name of \"{meter}\" got database error of: {errorMessage}",
		"csv.failed-meter-upload": "(Need French) Failed to upload meters due to internal OED Error: {errorMessage}",
		"csv.mismatched-cumulative-variables": "(Need French) On meter {meter} in pipeline: cumulative was false but cumulative reset was true. To avoid mistakes all reading are rejected.",
		"csv.failed-to-parse-start-datetime": "(Need French) The start date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.failed-to-parse-end-datetime": "(Need French) The end date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.invalid-date": "(Need French) For meter {meter}: Error parsing Reading #{num} The start ({start}) and/or end time ({end}) provided did not parse into a valid date/time so all reading are rejected.",
		"csv.invalid-reading-number": "(Need French) For meter {meterName}: Error parsing Reading #{num} with cumulative data. The reading value provided of {reading} is not considered a number so all reading are rejected.",
		"csv.verified-user":"(Need french)Invalid credentials",
		"csv.insert-readings-success":"(Need french)It looks like the insert of the readings was a success.",
		"csv.warning-during-readings-process":"(need french)However, note that the processing of the readings returned these warning(s): ",
		"csv.insert-readings-failed":'(Need French)It looks like the insert of the readings had issues with some or all of the readings where the processing of the readings returned these warning(s)/error(s): ',
		"csv.error-uploading":"Aucun fichier CSV n\'a été téléchargé. Un fichier CSV doit être soumis via le paramètre csvfile.",
		"csv.invalid-token":"(Need French) Invalid token (either unauthorized or logged out",
		"csv.create-meter-false":"(Need French) User Error: Meter with name '{meter}' not found. createMeter needs to be set true in order to automatically create meter."

	},
	"es": {
		"status.success": "ÉXITO",
		"status.failure": "FALLA",
		"csv.failed-to-write-file": "Error interno de OED: Error al escribir el archivo: {filename}",
		"csv.missing-dst-crossing-date": "No se pudo encontrar la fecha de cruce de DST en la canalización, por lo que se rindió.",
		"csv.invalid-gps-input": "(Need Spanish) For meter {meter} the gps coordinates of {gps} are invalid",
		"csv.invalid-unit-id": "(Need Spanish) For meter {meter} the unit of {unit} is invalid",
		"csv.invalid-graphic-unit": "(Need Spanish) For meter {meter} the default graphic unit of {graphic_unit} is invalid",
		"csv.require-single-meter": "(Need Spanish) Meter name provided (\"{meter}\") in request with update for meters but more than one meter in CSV so not processing",
		"csv.non-existent-meter-name": "(Need Spanish) Meter name of \"{meter}\" does not seem to exist with update for meters and got DB error of: {errorMessage}",
		"csv.duplicate-meter": "(Need Spanish) Meter name of \"{meter}\" got database error of: {errorMessage}",
		"csv.failed-meter-upload": "(Need Spanish) Failed to upload meters due to internal OED Error: {errorMessage}",
		"csv.mismatched-cumulative-variables": "(Need Spanish) On meter {meter} in pipeline: cumulative was false but cumulative reset was true. To avoid mistakes all reading are rejected.",
		"csv.failed-to-parse-start-datetime": "(Need Spanish) The start date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.failed-to-parse-end-datetime": "(Need Spanish) The end date/time of {datetime} did not parse to a date/time using the normal format so a less restrictive method is being tried. This is a warning since it can lead to wrong results but often okay.",
		"csv.invalid-date": "(Need Spanish) For meter {meter}: Error parsing Reading #{num} The start ({start}) and/or end time ({end}) provided did not parse into a valid date/time so all reading are rejected.",
		"csv.invalid-reading-number": "(Need Spanish) For meter {meterName}: Error parsing Reading #{num} with cumulative data. The reading value provided of {reading} is not considered a number so all reading are rejected.",
		"csv.error-uploading":  "Se debe enviar un archivo csv a través del parámetro csvfile.",
		"csv.verified-user": "Credenciales no Válidas",
		"csv.insert-readings-success":"Parece que la inserción de las lecturas fue un éxito.",
		"csv.warning-during-readings-process":"Sin embargo, tenga en cuenta que el procesamiento de las lecturas devolvió estas advertencias: ",
		"csv.insert-readings-failed":'Parece que la inserción de las lecturas tuvo problemas con algunas o todas las lecturas donde el procesamiento de las lecturas devolvió estas advertencias/errores: ',
		"csv.invalid-token":"(Need Spanish) Invalid token (either unauthorized or logged out)",
		"csv.create-meter-false":"(Need Spanish) User Error: Meter with name '{meter}' not found. createMeter needs to be set true in order to automatically create meter."

	}
}
