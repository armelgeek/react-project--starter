import React, { memo } from "react";

const Field = memo(({ schemas }) => {
    return (
        <>
            {schemas.length > 0 &&
                schemas.map((schema, index) => {
                    if (schema.type == "text") {
                        <Form.Field.Input
                            key={index}
                            name={schema.name}
                            label={schema.label}
                            placeholder={schema.placeholder}
                        />;
                    } else if (schema.type == "textarea") {
                        <Form.Field.Textarea
                            key={index}
                            name={schema.name}
                            label={schema.label}
                            placeholder={schema.placeholder}
                        />;
                    }
                })}
        </>
    );
});

export default Field;
