frappe.listview_settings["meeting"]={
	get_indicator: function(doc) {
		return [__(doc.status), {
			"planned": "blue",
			"Invitation Sent": "orange",
			"in progress": "red",
			"completed": "green",
			"cancelled": "darkgrey"

		}[doc.status], "status,=,"+doc.status];


		
	}

};