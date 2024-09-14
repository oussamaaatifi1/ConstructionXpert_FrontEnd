package com.projetss.tache.mapper;

import com.projetss.tache.dto.TacheDto;
import com.projetss.tache.model.Enum.Status;
import com.projetss.tache.model.Tache;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-14T23:01:43+0100",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 21.0.2 (Oracle Corporation)"
)
public class TacheMapperImpl implements TacheMapper {

    @Override
    public TacheDto toDTO(Tache tache) {
        if ( tache == null ) {
            return null;
        }

        TacheDto tacheDto = new TacheDto();

        tacheDto.setProjetId( tache.getProjetId() );
        tacheDto.setId( tache.getId() );
        tacheDto.setDescription( tache.getDescription() );
        tacheDto.setStartDate( tache.getStartDate() );
        tacheDto.setEndDate( tache.getEndDate() );
        if ( tache.getStatus() != null ) {
            tacheDto.setStatus( tache.getStatus().name() );
        }
        tacheDto.setResources( tache.getResources() );

        return tacheDto;
    }

    @Override
    public Tache toEntity(TacheDto tacheDto) {
        if ( tacheDto == null ) {
            return null;
        }

        Tache tache = new Tache();

        tache.setProjetId( tacheDto.getProjetId() );
        tache.setId( tacheDto.getId() );
        tache.setDescription( tacheDto.getDescription() );
        tache.setStartDate( tacheDto.getStartDate() );
        tache.setEndDate( tacheDto.getEndDate() );
        if ( tacheDto.getStatus() != null ) {
            tache.setStatus( Enum.valueOf( Status.class, tacheDto.getStatus() ) );
        }
        tache.setResources( tacheDto.getResources() );

        return tache;
    }
}
